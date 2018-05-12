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
		"x-akamai-request-id",
		"",
		"Akamai"
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
	"\\.akamaiedge-staging\\.net$": "Akamai",
	"\\.akamaiedge\\.net$": "Akamai",
	"\\.akamaihd\\.net$": "Akamai",
	"\\.akamaistream\\.net$": "Akamai",
	"\\.akamaitechnologies\\.com$": "Akamai",
	"\\.akamaitechnologies\\.fr$": "Akamai",
	"\\.akamaized\\.net$": "Akamai",
	"\\.akastream\\.net$": "Akamai",
	"\\.alikunlun\\.com$": "Alibaba",
	"\\.aliyuncdn\\.com$": "Alibaba",
	"\\.alphacdn\\.net$": "Edgecast",
	"\\.amazonaws\\.com$": "Amazon AWS",
	"\\.anankecdn\\.com\\.br$": "Ananke",
	"\\.att-dsa\\.net$": "AT&T",
	"\\.ay1\\.b\\.yahoo\\.com$": "Yahoo",
	"\\.azion\\.net$": "Azion",
	"\\.azioncdn\\.com$": "Azion",
	"\\.azioncdn\\.net$": "Azion",
	"\\.azureedge\\.net$": "Microsoft Azure",
	"\\.belugacdn\\.com$": "BelugaCDN",
	"\\.betacdn\\.net$": "Edgecast",
	"\\.bisongrid\\.net$": "Bison Grid",
	"\\.bitgravity\\.com$": "BitGravity",
	"\\.bluehatnetwork\\.com$": "Blue Hat Network",
	"\\.c3cache\\.net$": "ChinaCache",
	"\\.c3cdn\\.net$": "ChinaCache",
	"\\.cachecentric\\.net$": "CacheCentric",
	"\\.cachefly\\.net$": "Cachefly",
	"\\.cap-mii\\.net$": "Mirror Image",
	"\\.caspowa\\.com$": "Caspowa",
	"\\.ccgslb\\.com$": "ChinaCache",
	"\\.ccgslb\\.net$": "ChinaCache",
	"\\.cdn\\.gocache\\.net$": "GoCache",
	"\\.cdn\\.telefonica\\.com$": "Telefonica",
	"\\.cdn77\\.net$": "CDN77",
	"\\.cdn77\\.org$": "CDN77",
	"\\.cdncloud\\.net\\.au$": "MediaCloud",
	"\\.cdnga\\.net$": "CDNetworks",
	"\\.cdngc\\.net$": "CDNetworks",
	"\\.cdngd\\.net$": "CDNetworks",
	"\\.cdngs\\.net$": "CDNetworks",
	"\\.cdnify\\.io$": "CDNify",
	"\\.cdninstagram\\.com$": "Facebook",
	"\\.cdnsun\\.net$": "CDNsun",
	"\\.cdntel\\.net$": "Telenor",
	"\\.chicdn\\.net$": "Edgecast",
	"\\.chinacache\\.net$": "ChinaCache",
	"\\.clients\\.turbobytes\\.com$": "Turbobytes",
	"\\.cloudflare\\.com$": "Cloudflare",
	"\\.cloudflare\\.net$": "Cloudflare",
	"\\.cloudfront\\.net$": "Amazon CloudFront",
	"\\.cotcdn\\.net$": "Cotendo CDN",
	"\\.cubecdn\\.net$": "cubeCDN",
	"\\.distil\\.us$": "Distil Networks",
	"\\.doubleclick\\.net$": "Google",
	"\\.edge2befaster\\.com$": "TransparentCDN",
	"\\.edgecaching\\.net$": "Hostway",
	"\\.edgekey\\.net$": "Akamai",
	"\\.edgesuite\\.net$": "Akamai",
	"\\.epsiloncdn\\.net$": "Edgecast",
	"\\.etacdn\\.net$": "Edgecast",
	"\\.facebook\\.com$": "Facebook",
	"\\.facebook\\.net$": "Facebook",
	"\\.fasterized\\.com$": "Fasterize",
	"\\.fastly\\.net$": "Fastly",
	"\\.fastlylb\\.net$": "Fastly",
	"\\.fbcdn\\.net$": "Facebook",
	"\\.footprint\\.net$": "Level 3",
	"\\.footprint6\\.net$": "Level 3",
	"\\.fpbns\\.net$": "Level 3",
	"\\.fplive\\.net$": "Level 3",
	"\\.fpondemand\\.net$": "Level 3",
	"\\.gccdn\\.cn$": "CDNetworks",
	"\\.gccdn\\.net$": "CDNetworks",
	"\\.gcdn\\.co$": "G-Core Labs",
	"\\.google\\.": "Google",
	"\\.googleusercontent\\.com$": "Google",
	"\\.gslb\\.taobao\\.com$": "Taobao",
	"\\.gslb\\.tbcache\\.com$": "Alimama",
	"\\.gstatic\\.com$": "Google",
	"\\.herokuapp\\.com$": "Heroku",
	"\\.hiberniacdn\\.com$": "HiberniaCDN",
	"\\.incapdns\\.net$": "Incapsula",
	"\\.inscname\\.net$": "Instart Logic",
	"\\.insnw\\.net$": "Instart Logic",
	"\\.instacontent\\.net$": "Mirror Image",
	"\\.internapcdn\\.net$": "Internap",
	"\\.iotacdn\\.net$": "Edgecast",
	"\\.isprimecdn\\.com$": "ISPrime",
	"\\.kappacdn\\.net$": "Edgecast",
	"\\.kxcdn\\.com$": "KeyCDN",
	"\\.lagrangesystems\\.net$": "Webscale Networks",
	"\\.llns\\.net$": "Limelight",
	"\\.llnwd\\.net$": "Limelight",
	"\\.llnwi\\.net$": "Limelight",
	"\\.lswcdn\\.eu$": "LeaseWeb CDN",
	"\\.lswcdn\\.net$": "LeaseWeb CDN",
	"\\.lxdns\\.com$": "ChinaNetCenter",
	"\\.mirror-image\\.net$": "Mirror Image",
	"\\.mncdn\\.com$": "Medianova",
	"\\.mncdn\\.net$": "Medianova",
	"\\.mncdn\\.org$": "Medianova",
	"\\.mucdn\\.net$": "Edgecast",
	"\\.mwcloudcdn\\.com$": "Quantil",
	"\\.mwcname\\.com$": "Quantil",
	"\\.netdna-cdn\\.com$": "NetDNA",
	"\\.netdna-ssl\\.com$": "NetDNA",
	"\\.netdna\\.com$": "NetDNA",
	"\\.ngenix\\.net$": "NGENIX",
	"\\.nocookie\\.net$": "Fastly",
	"\\.nttcdn\\.com$": "NTT",
	"\\.nucdn\\.net$": "Edgecast",
	"\\.nyiftw\\.com$": "NYI FTW",
	"\\.nyiftw\\.net$": "NYI FTW",
	"\\.omegacdn\\.net$": "Edgecast",
	"\\.omicroncdn\\.net$": "Edgecast",
	"\\.optimalcdn\\.com$": "Optimal CDN",
	"\\.ourwebpic\\.com$": "ChinaNetCenter",
	"\\.pagerain\\.net$": "PageRain",
	"\\.panthercdn\\.com$": "CDNetworks",
	"\\.psicdn\\.net$": "Edgecast",
	"\\.qingcdn\\.com$": "BaishanCloud",
	"\\.r\\.worldcdn\\.net$": "OnApp",
	"\\.r\\.worldssl\\.net$": "OnApp",
	"\\.raxcdn\\.com$": "Rackspace",
	"\\.reblaze\\.com$": "Reblaze",
	"\\.resrc\\.it$": "ReSRC.it",
	"\\.revcn\\.net$": "Rev Software",
	"\\.revdn\\.net$": "Rev Software",
	"\\.rhocdn\\.net$": "Edgecast",
	"\\.rlcdn\\.com$": "Reapleaf",
	"\\.rncdn1\\.com$": "Reflected Networks",
	"\\.sandpiper\\.net$": "Level 3",
	"\\.secretcdn\\.net$": "Fastly",
	"\\.section\\.io$": "section.io",
	"\\.sigmacdn\\.net$": "Edgecast",
	"\\.simplecdn\\.net$": "Simple CDN",
	"\\.sitelockcdn\\.net$": "SiteLock",
	"\\.smecdn\\.net$": "Edgecast",
	"\\.speedcdns\\.com$": "ChinaNetCenter",
	"\\.squixa\\.net$": "section.io",
	"\\.srip\\.net$": "Akamai",
	"\\.swiftcdn\\.net$": "SwiftCDN",
	"\\.swiftcdn1\\.com$": "SwiftCDN",
	"\\.swiftserve\\.com$": "SwiftServe",
	"\\.syndn\\.net$": "Synedge",
	"\\.systemcdn\\.net$": "EdgeCast",
	"\\.taobaocdn\\.com$": "Taobao",
	"\\.taucdn\\.net$": "Edgecast",
	"\\.teliasoneracdn\\.net$": "TeliaSonera",
	"\\.teridions\\.net$": "Teridion",
	"\\.thetacdn\\.net$": "Edgecast",
	"\\.tl88\\.net$": "Akamai China CDN",
	"\\.transactcdn\\.com$": "Edgecast",
	"\\.transactcdn\\.net$": "Edgecast",
	"\\.turbobytes-cdn\\.com$": "Turbobytes",
	"\\.twimg\\.com$": "Twitter",
	"\\.unicorncdn\\.net$": "UnicornCDN",
	"\\.upsiloncdn\\.net$": "Edgecast",
	"\\.v1cdn\\.net$": "Edgecast",
	"\\.v2cdn\\.net$": "Edgecast",
	"\\.v3cdn\\.net$": "Edgecast",
	"\\.v4cdn\\.net$": "Edgecast",
	"\\.v5cdn\\.net$": "Edgecast",
	"\\.vitalstream\\.com$": "Internap",
	"\\.vo\\.msecnd\\.net$": "Microsoft Azure",
	"\\.voxcdn\\.com$": "VoxCDN",
	"\\.voxcdn\\.net$": "VoxCDN",
	"\\.wp\\.com$": "WordPress",
	"\\.wscdns\\.com$": "ChinaNetCenter",
	"\\.wscloudcdn\\.com$": "ChinaNetCenter",
	"\\.xicdn\\.net$": "Edgecast",
	"\\.yahooapis\\.com$": "Yahoo",
	"\\.yimg\\.": "Yahoo",
	"\\.yottaa\\.net$": "Yottaa",
	"\\.zenedge\\.net$": "Zenedge",
	"\\.zetacdn\\.net$": "Edgecast",
	"bo\\.lt$": "BO\\.LT",
	"cdn\\.jsdelivr\\.net$": "jsDelivr",
	"cdn\\.sfr\\.net$": "SFR",
	"code\\.jquery\\.com$": "jQuery",
	"edgecastcdn\\.net$": "EdgeCast",
	"googlehosted\\.com$": "Google",
	"googlesyndication\\.": "Google",
	"hwcdn\\.net$": "Highwinds",
	"tbcdn\\.cn$": "Taobao",
	"youtube\\.": "Google"
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
/* eslint-env commonjs, browser, amd */
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
        for (var headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                lowerHeaders[headerName.toLowerCase()] = headers[headerName];
            }
        }

        var i, data, cdn, match, matches;

        // find any matching headers in our data
        for (i = 0; i < headersData.length; i++) {
            data = headersData[i];

            var header = data[0];
            match = data[1];
            cdn = data[2];

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
        for (i = 0; i < multiHeadersData.length; i++) {
            data = multiHeadersData[i];

            cdn = data[0];
            matches = data[1];

            var matchesAll = true;
            var matchEvidence = [];

            // loop through, looking to see if this request matches
            // all headers in the set
            for (match in matches) {
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
