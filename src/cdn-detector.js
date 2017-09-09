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
