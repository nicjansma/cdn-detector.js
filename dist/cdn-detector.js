var CdnDetectorHeaders = [
	[
		"powered-by-chinacache",
		"",
		"ChinaCache"
	],
	[
		"server",
		"airee",
		"Airee"
	],
	[
		"server",
		"caspowa",
		"Caspowa"
	],
	[
		"server",
		"cloudflare",
		"Cloudflare"
	],
	[
		"server",
		"ecacc",
		"Edgecast"
	],
	[
		"server",
		"ecd",
		"Edgecast"
	],
	[
		"server",
		"ecs",
		"Edgecast"
	],
	[
		"server",
		"gocache",
		"GoCache"
	],
	[
		"server",
		"golfe2",
		"Google"
	],
	[
		"server",
		"gse",
		"Google"
	],
	[
		"server",
		"gws",
		"Google"
	],
	[
		"server",
		"hiberniacdn",
		"HiberniaCDN"
	],
	[
		"server",
		"leasewebcdn",
		"LeaseWeb CDN"
	],
	[
		"server",
		"netdna",
		"NetDNA"
	],
	[
		"server",
		"optimal cdn",
		"Optimal CDN"
	],
	[
		"server",
		"resrc",
		"ReSRC.it"
	],
	[
		"server",
		"sffe",
		"Google"
	],
	[
		"server",
		"surgecdn",
		"Surge"
	],
	[
		"server",
		"tsa_b",
		"Twitter"
	],
	[
		"server",
		"unicorncdn",
		"UnicornCDN"
	],
	[
		"server",
		"yunjiasu",
		"Yunjiasu"
	],
	[
		"via",
		"bitgravity",
		"BitGravity"
	],
	[
		"via",
		"cloudfront",
		"Amazon CloudFront"
	],
	[
		"via",
		"rev-cache",
		"Rev Software"
	],
	[
		"x-amz-cf-id",
		"",
		"Amazon CloudFront"
	],
	[
		"x-ar-debug",
		"",
		"Aryaka"
	],
	[
		"x-cache",
		"cache.51cdn.com",
		"ChinaNetCenter"
	],
	[
		"x-cdn-geo",
		"",
		"OVH CDN"
	],
	[
		"x-cdn",
		"incapsula",
		"Incapsula"
	],
	[
		"x-cdn",
		"zenedge",
		"Zenedge"
	],
	[
		"x-edge-ip",
		"",
		"CDN"
	],
	[
		"x-edge-location",
		"",
		"CDN"
	],
	[
		"x-hw",
		"",
		"Highwinds"
	],
	[
		"x-iinfo",
		"",
		"Incapsula"
	],
	[
		"x-instart-request-id",
		"instart",
		"Instart Logic"
	],
	[
		"x-powered-by",
		"nyi ftw",
		"NYI FTW"
	],
	[
		"x-px",
		"",
		"CDNetworks"
	],
	[
		"x-rev-cache",
		"",
		"Rev Software"
	]
];
var CdnDetectorHostnames = {
	"\\.aads-cn\\.net$": "Aryaka",
	"\\.aads-cng\\.net$": "Aryaka",
	"\\.aads1\\.net$": "Aryaka",
	"\\.afxcdn\\.net$": "afxcdn.net",
	"\\.akadns\\.net$": "Akamai",
	"\\.akamai\\.net$": "Akamai",
	"\\.akamaiedge\\.net$": "Akamai",
	"\\.akamaihd\\.net$": "Akamai",
	"\\.akamaitechnologies\\.com$": "Akamai",
	"\\.akamaitechnologies\\.fr$": "Akamai",
	"\\.akamaized\\.net$": "Akamai",
	"\\.anankecdn\\.com\\.br$": "Ananke",
	"\\.att-dsa\\.net$": "AT&T",
	"\\.ay1\\.b\\.yahoo\\.com$": "Yahoo",
	"\\.azion\\.net$": "Azion",
	"\\.azioncdn\\.com$": "Azion",
	"\\.azioncdn\\.net$": "Azion",
	"\\.azureedge\\.net$": "Microsoft Azure",
	"\\.bisongrid\\.net$": "Bison Grid",
	"\\.bitgravity\\.com$": "BitGravity",
	"\\.bluehatnetwork\\.com$": "Blue Hat Network",
	"\\.c3cache\\.net$": "ChinaCache",
	"\\.c3cdn\\.net$": "ChinaCache",
	"\\.cachefly\\.net$": "Cachefly",
	"\\.cap-mii\\.net$": "Mirror Image",
	"\\.caspowa\\.com$": "Caspowa",
	"\\.ccgslb\\.com$": "ChinaCache",
	"\\.cdn\\.gocache\\.net$": "GoCache",
	"\\.cdn\\.telefonica\\.com$": "Telefonica",
	"\\.cdn77\\.net$": "CDN77",
	"\\.cdn77\\.org$": "CDN77",
	"\\.cdncloud\\.net\\.au$": "MediaCloud",
	"\\.cdngc\\.net$": "CDNetworks",
	"\\.cdninstagram\\.com$": "Facebook",
	"\\.cdnsun\\.net$": "CDNsun",
	"\\.cdntel\\.net$": "Telenor",
	"\\.chinacache\\.net$": "ChinaCache",
	"\\.clients\\.turbobytes\\.com$": "Turbobytes",
	"\\.cloudflare\\.com$": "Cloudflare",
	"\\.cloudfront\\.net$": "Amazon CloudFront",
	"\\.cotcdn\\.net$": "Cotendo CDN",
	"\\.cubecdn\\.net$": "cubeCDN",
	"\\.doubleclick\\.net$": "Google",
	"\\.edgekey\\.net$": "Akamai",
	"\\.edgesuite\\.net$": "Akamai",
	"\\.facebook\\.com$": "Facebook",
	"\\.facebook\\.net$": "Facebook",
	"\\.fastly\\.net$": "Fastly",
	"\\.fastlylb\\.net$": "Fastly",
	"\\.fbcdn\\.net$": "Facebook",
	"\\.footprint\\.net$": "Level 3",
	"\\.fpbns\\.net$": "Level 3",
	"\\.gccdn\\.cn$": "CDNetworks",
	"\\.gccdn\\.net$": "CDNetworks",
	"\\.google\\.": "Google",
	"\\.googleusercontent\\.com$": "Google",
	"\\.gslb\\.taobao\\.com$": "Taobao",
	"\\.gslb\\.tbcache\\.com$": "Alimama",
	"\\.gstatic\\.com$": "Google",
	"\\.hiberniacdn\\.com$": "HiberniaCDN",
	"\\.incapdns\\.net$": "Incapsula",
	"\\.inscname\\.net$": "Instart Logic",
	"\\.insnw\\.net$": "Instart Logic",
	"\\.instacontent\\.net$": "Mirror Image",
	"\\.internapcdn\\.net$": "Internap",
	"\\.kxcdn\\.com$": "KeyCDN",
	"\\.llnwd\\.net$": "Limelight",
	"\\.lswcdn\\.eu$": "LeaseWeb CDN",
	"\\.lswcdn\\.net$": "LeaseWeb CDN",
	"\\.lxdns\\.com$": "ChinaNetCenter",
	"\\.mirror-image\\.net$": "Mirror Image",
	"\\.mncdn\\.com$": "Medianova",
	"\\.mncdn\\.net$": "Medianova",
	"\\.mncdn\\.org$": "Medianova",
	"\\.netdna-cdn\\.com$": "NetDNA",
	"\\.netdna-ssl\\.com$": "NetDNA",
	"\\.netdna\\.com$": "NetDNA",
	"\\.ngenix\\.net$": "NGENIX",
	"\\.nocookie\\.net$": "Fastly",
	"\\.nyiftw\\.com$": "NYI FTW",
	"\\.nyiftw\\.net$": "NYI FTW",
	"\\.optimalcdn\\.com$": "Optimal CDN",
	"\\.ourwebpic\\.com$": "ChinaNetCenter",
	"\\.pagerain\\.net$": "PageRain",
	"\\.panthercdn\\.com$": "CDNetworks",
	"\\.r\\.worldcdn\\.net$": "OnApp",
	"\\.r\\.worldssl\\.net$": "OnApp",
	"\\.raxcdn\\.com$": "Rackspace",
	"\\.resrc\\.it$": "ReSRC.it",
	"\\.revcn\\.net$": "Rev Software",
	"\\.revdn\\.net$": "Rev Software",
	"\\.rlcdn\\.com$": "Reapleaf",
	"\\.rncdn1\\.com$": "Reflected Networks",
	"\\.simplecdn\\.net$": "Simple CDN",
	"\\.squixa\\.net$": "section.io",
	"\\.srip\\.net$": "Akamai",
	"\\.swiftcdn1\\.com$": "SwiftCDN",
	"\\.systemcdn\\.net$": "EdgeCast",
	"\\.taobaocdn\\.com$": "Taobao",
	"\\.tl88\\.net$": "Akamai China CDN",
	"\\.transactcdn\\.net$": "Edgecast",
	"\\.twimg\\.com$": "Twitter",
	"\\.unicorncdn\\.net$": "UnicornCDN",
	"\\.v1cdn\\.net$": "Edgecast",
	"\\.v2cdn\\.net$": "Edgecast",
	"\\.v3cdn\\.net$": "Edgecast",
	"\\.v4cdn\\.net$": "Edgecast",
	"\\.v5cdn\\.net$": "Edgecast",
	"\\.vo\\.msecnd\\.net$": "Microsoft Azure",
	"\\.voxcdn\\.net$": "VoxCDN",
	"\\.wp\\.com$": "WordPress",
	"\\.wscdns\\.com$": "ChinaNetCenter",
	"\\.wscloudcdn\\.com$": "ChinaNetCenter",
	"\\.yahooapis\\.com$": "Yahoo",
	"\\.yimg\\.": "Yahoo",
	"\\.yottaa\\.net$": "Yottaa",
	"\\.zenedge\\.net$": "Zenedge",
	"bo\\.lt$": "BO\\.LT",
	"cdn\\.jsdelivr\\.net$": "jsDelivr",
	"cdn\\.sfr\\.net$": "SFR",
	"edgecastcdn\\.net$": "EdgeCast",
	"googlehosted\\.com$": "Google",
	"googlesyndication\\.": "Google",
	"hwcdn\\.net$": "Highwinds",
	"tbcdn\\.cn$": "Taobao",
	"youtube\\.": "Google",
	"code\\.jquery\\.com$": "jQuery"
};
var CdnDetectorMultiHeaders = [
	[
		"Fastly",
		{
			"via": "varnish",
			"x-served-by": "cache-",
			"x-cache": ""
		}
	]
];
//
// cdn-detector.js
//
// Detects Content Delivery Networks (CDNs) based on the HTTP hostname and
// HTTP response headers.
//
// https://github.com/nicjansma/cdn-detector.js
//
(function(window) {
    "use strict";

    // save old CdnDetector object for noConflict()
    var root;
    var previousObj;
    if (typeof window !== "undefined") {
        root = window;
        previousObj = root.CdnDetector;
    } else {
        root = {};
    }

    //
    // Imports
    //
    // Pulls JSON data from the global scope (i.e. if running in a browser) or via
    // require() if in Node
    //
    var headersData = root.CdnDetectorHeaders ?
        root.CdnDetectorHeaders : require("../data/headers.json");
    var hostnamesData = root.CdnDetectorHostnames ?
        root.CdnDetectorHostnames : require("../data/hostnames.json");
    var multiHeadersData = root.CdnDetectorMultiHeaders ?
        root.CdnDetectorMultiHeaders : require("../data/multi-headers.json");

    // model
    var self, CdnDetector = self = {};

    //
    // Functions
    //
    /**
     * Changes the value of CdnDetector back to its original value, returning
     * a reference to the CdnDetector object.
     *
     * @returns {object} Original CdnDetector object
     */
    CdnDetector.noConflict = function() {
        root.CdnDetector = previousObj;
        return CdnDetector;
    };

    /**
     * @typedef CdnDetectorResult
     * @type Object
     * @property {string} cdn CDN name
     * @property {object} [evidence] Evidence why the CDN was detected
     * @property {object} [evidence.headers] Header evidence
     * @property {string} [evidence.hostname] Hostname evidence
     */

    //
    // Functions
    //
    /**
     * Detects CDN usage from the HTTP hostname or headers.
     *
     * @param {string} hostname Hostname
     * @param {object} headers Map of HTTP Response headers
     *
     * @returns {CdnDetectorResult|null} Result, or null if no match
     */
    CdnDetector.detect = function(hostname, headers) {
        var result = {};

        // check hostname first
        var hostnameCheck = self.detectFromHostname(hostname);
        if (hostnameCheck) {
            result.cdn = hostnameCheck.cdn;
            result.evidence = result.evidence || {};
            result.evidence.hostname = hostnameCheck.evidence;
        }

        // check HTTP response headers next
        var headersCheck = self.detectFromHeaders(headers);
        if (headersCheck) {
            result.cdn = headersCheck.cdn;
            result.evidence = result.evidence || {};
            result.evidence.headers = headersCheck.evidence;
        }

        return result.cdn ? result : null;
    };

    /**
     * @typedef CdnDetectorHostnameResult
     * @type Object
     * @property {string} cdn CDN name
     * @property {string} evidence Evidence why the CDN was detected
     */

    /**
     * Detects CDN usage from a hostname.
     *
     * Matches against regular expressions in hostnames.json.
     *
     * @param {string} hostname Request Host name
     *
     * @returns {CdnDetectorHostnameResult|null} Host's CDN info, or, null if a CDN wasn't detected
     */
    CdnDetector.detectFromHostname = function(hostname) {
        if (!hostname) {
            // skip falsy (empty, null, etc) hostnames
            return null;
        }

        for (var regexString in hostnamesData) {
            if (hostnamesData.hasOwnProperty(regexString)) {
                var regex = new RegExp(regexString);

                if (regex.test(hostname)) {
                    return {
                        cdn: hostnamesData[regexString],
                        evidence: regexString
                    };
                }
            }
        }

        return null;
    };

    /**
     * @typedef CdnDetectorHeadersResult
     * @type Object
     * @property {string} cdn CDN name
     * @property {string[]} evidence Array of HTTP response headers that matched
     */

    /**
     * Detects CDN usage from HTTP response headers.
     *
     * Matches against headers in headers.json and multi-headers.json.
     *
     * @param {object} headers HTTP Response Headers map
     *
     * @returns {CdnDetectorHeadersResult|null} Header CDN info, or, null if a CDN wasn't detected
     */
    CdnDetector.detectFromHeaders = function(headers) {
        if (!headers || headers.length === 0) {
            return null;
        }

        // build return evidence object in case we find something
        var result = {
            evidence: []
        };

        // convert all incoming headers to lower case first
        var lowerHeaders = {};
        for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
                lowerHeaders[header.toLowerCase()] = headers[header];
            }
        }

        // find any matching headers in our data
        for (var i = 0; i < headersData.length; i++) {
            var data = headersData[i];

            var header = data[0];
            var match = data[1];
            var cdn = data[2];

            if (typeof lowerHeaders[header] === "string") {
                // if there is no match string, we're good
                // if there a match string, make sure the header starts with it
                if ((!match || match.length === 0)
                    || (match.length > 0 && lowerHeaders[header].toLowerCase().indexOf(match) === 0)) {
                    result.cdn = cdn;
                    result.evidence.push(header + ": " + (match ? match : "*"));
                }
            }
        }

        // find any multi headers (multiple headers need to match)
        for (var i = 0; i < multiHeadersData.length; i++) {
            var data = multiHeadersData[i];

            var cdn = data[0];
            var matches = data[1];

            var matchesAll = true;
            var matchEvidence = [];

            // loop through, looking to see if this request matches
            // all headers in the set
            for (var match in matches) {
                if (matches.hasOwnProperty(match)) {
                    var matchValue = matches[match];

                    if (typeof lowerHeaders[match] !== "string") {
                        matchesAll = false;
                        break;
                    }

                    if (lowerHeaders[match].toLowerCase().indexOf(matchValue) !== 0) {
                        matchesAll = false;
                        break;
                    }

                    // add to our evidence pile
                    matchEvidence.push(match + ": " + (matchValue ? matchValue : "*"));
                }
            }

            // we matched all headers
            if (matchesAll) {
                result.cdn = cdn;
                result.evidence = result.evidence.concat(matchEvidence);
            }
        }

        return result.cdn ? result : null;
    };

    //
    // Export to the appropriate location
    //
    if (typeof define === "function" && define.amd) {
        //
        // AMD / RequireJS
        //
        define([], function() {
            return CdnDetector;
        });
    } else if (typeof module !== "undefined" && module.exports) {
        //
        // Node.js
        //
        module.exports = CdnDetector;
    } else if (typeof root !== "undefined") {
        //
        // Browser Global
        //
        root.CdnDetector = CdnDetector;
    }
}(typeof window !== "undefined" ? window : undefined));
