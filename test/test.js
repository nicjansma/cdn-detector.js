/* eslint-env node, mocha, browser */
(function(root) {
    "use strict";

    //
    // Run in either Mocha, Karma or Browser environments
    //
    if (typeof root === "undefined") {
        root = {};
    }

    var cd = root.CdnDetector ?
        root.CdnDetector :
        require("../src/cdn-detector");

    var chai = root.chai ? root.chai : require("chai");
    var expect = chai.expect;

    //
    // CdnDetector
    //
    describe("CdnDetector", function() {
        //
        // .detect
        //
        describe(".detect()", function() {
            it("should return null when called with no parameters", function() {
                expect(cd.detect()).to.equal(null);
            });

            it("should return null for a non-matching hostname and headers", function() {
                expect(cd.detect("www.foobar.com", [])).to.equal(null);
            });

            it("should return Akamai for akamai.net", function() {
                var result = cd.detect("www.akamai.net", []);
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Akamai");
                expect(result.evidence.hostname).to.equal("\\.akamai\\.net$");
            });

            it("should return Google for youtube.", function() {
                var result = cd.detect("img.youtube.com", []);
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Google");
                expect(result.evidence.hostname).to.equal("youtube\\.");
            });

            it("should return Google for google.fr", function() {
                var result = cd.detect("www.google.fr", []);
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Google");
                expect(result.evidence.hostname).to.equal("\\.google\\.");
            });

            it("should return CloudFlare for blah.com with Server: CloudFlare", function() {
                var result = cd.detect("blah.com", {
                    Server: "cloudflare"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("Cloudflare");

                expect(result.evidence.headers).to.contain("server: cloudflare");
            });
        });

        //
        // .detectFromHostname
        //
        describe(".detectFromHostname()", function() {
            it("should return null for an undefined hostname", function() {
                expect(cd.detectFromHostname()).to.equal(null);
            });

            it("should return null for a null hostname", function() {
                expect(cd.detectFromHostname(null)).to.equal(null);
            });

            it("should return null for an empty hostname", function() {
                expect(cd.detectFromHostname("")).to.equal(null);
            });

            it("should return null for a non-matching hostname", function() {
                expect(cd.detectFromHostname("www.foobar.com")).to.equal(null);
            });

            it("should return Akamai for akamai.net", function() {
                var result = cd.detectFromHostname("www.akamai.net");
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Akamai");
                expect(result.evidence).to.equal("\\.akamai\\.net$");
            });

            it("should return Google for youtube.", function() {
                var result = cd.detectFromHostname("img.youtube.com");
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Google");
                expect(result.evidence).to.equal("youtube\\.");
            });

            it("should return Google for google.fr", function() {
                var result = cd.detectFromHostname("www.google.fr");
                expect(result).to.not.equal(null);
                expect(result.cdn).to.equal("Google");
                expect(result.evidence).to.equal("\\.google\\.");
            });
        });

        //
        // .detectFromHeaders
        //
        describe(".detectFromHeaders()", function() {
            it("should return null for an undefined header list", function() {
                expect(cd.detectFromHeaders()).to.equal(null);
            });

            it("should return null for a null header list", function() {
                expect(cd.detectFromHeaders(null)).to.equal(null);
            });

            it("should return null for an empty header list", function() {
                expect(cd.detectFromHeaders({})).to.equal(null);
            });

            it("should return null for non-matching headers", function() {
                expect(cd.detectFromHeaders({
                    foo: "bar"
                })).to.equal(null);
            });

            it("should return CloudFlare for Server: CloudFlare", function() {
                var result = cd.detectFromHeaders({
                    Server: "cloudflare"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("Cloudflare");

                expect(result.evidence).to.contain("server: cloudflare");
            });

            it("should return CloudFlare for server: CloudFlare", function() {
                var result = cd.detectFromHeaders({
                    server: "cloudflare"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("Cloudflare");

                expect(result.evidence).to.contain("server: cloudflare");
            });

            it("should return CloudFlare for Server: CloudFlare-nginx", function() {
                var result = cd.detectFromHeaders({
                    Server: "CloudFlare-nginx"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("Cloudflare");

                expect(result.evidence).to.contain("server: cloudflare");
            });

            it("should return CDN for a set x-edge-location", function() {
                var result = cd.detectFromHeaders({
                    "X-Edge-Location": "blah"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("CDN");

                expect(result.evidence).to.contain("x-edge-location: *");
            });

            it("should return CDN for an empty x-edge-location", function() {
                var result = cd.detectFromHeaders({
                    "X-Edge-Location": ""
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("CDN");

                expect(result.evidence).to.contain("x-edge-location: *");
            });

            it("should return CDN for x-edge-location and x-edge-ip", function() {
                var result = cd.detectFromHeaders({
                    "X-Edge-Location": "blah",
                    "X-Edge-IP": "127.0.0.1"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("CDN");

                expect(result.evidence).to.contain("x-edge-location: *");
                expect(result.evidence).to.contain("x-edge-ip: *");
            });

            it("should return Fastly for matching headers", function() {
                var result = cd.detectFromHeaders({
                    "Via": "varnish",
                    "x-served-by": "cache-101",
                    "x-cache": "abc"
                });

                expect(result).to.not.equal(null);

                expect(result.cdn).to.equal("Fastly");

                expect(result.evidence).to.contain("via: varnish");
                expect(result.evidence).to.contain("x-served-by: cache-");
                expect(result.evidence).to.contain("x-cache: *");
            });

            it("should not return Fastly if missing one of the headers", function() {
                var result = cd.detectFromHeaders({
                    "Via": "varnish",
                    "x-served-by": "cache-101"
                });

                expect(result).to.equal(null);
            });

            it("should not return Fastly if one of the headers has a wrong value", function() {
                var result = cd.detectFromHeaders({
                    "Via": "varnish",
                    "x-served-by": "wrong-value",
                    "x-cache": "abc"
                });

                expect(result).to.equal(null);
            });
        });
    });
}(typeof window !== "undefined" ? window : undefined));
