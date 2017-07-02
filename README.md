# cdn-detector.js

v0.1.4

[http://nicj.net](http://nicj.net)

Licensed under the MIT license

## Introduction

`cdn-detector.js` detects whether or not a HTTP response is being served from a Content Delivery Network (CDN),
by inspecting the request's hostname and HTTP response headers.

This project is based on data from:

* [WebpageTest](https://github.com/WPO-Foundation/webpagetest/blob/master/agent/wpthook/cdn.h)
* [cdnfinder.js](https://github.com/sajal/cdnfinder.js/blob/master/lib/guesscnamecdn.js)

## Download

Releases are available for download from [GitHub](https://github.com/nicjansma/cdn-detector.js).

### Web

The main source file is `src/cdn-detector.js`.  There are additional JSON data files in `data/*.json`.  These
files automatically get converted to `.js` files and are merged into the single-file
distribution `dist/cdn-detector.[min].js` via `gulp`.  If you want to use this project in a browser, use one of the `dist/*.js` files:

__Development:__ [cdn-detector.js](https://github.com/nicjansma/cdn-detector.js/raw/master/dist/cdn-detector.js) - 13.8kb

__Production:__ [cdn-detector.min.js](https://github.com/nicjansma/cdn-detector.js/raw/master/dist/cdn-detector.min.js) - 7.0kb minified, 2.3kb gzipped

### NPM

cdn-detector.js is also available as the [npm cdn-detector module](https://npmjs.org/package/cdn-detector). You can install
using Node Package Manager (npm):

    npm install cdn-detector

### Bower

cdn-detector.js is also available via [bower](http://bower.io/). You can install using:

    bower install cdn-detector

## Usage

To include `cdn-detector.js` in the browser, include it via a script tag:

```html
<script type="text/javascript" src="cdn-detector.min.js"></script>
```

Once included in the page, a top-level `CdnDetector` object is available on `window`.  If AMD or CommonJS environments are detected, it will expose itself via those methods.

From the NPM module:

```js
var cdnDetector = require("cdn-detector");
```

Once loaded, `cdn-detector` can be used by calling `CdnDetector.detect(hostname, headers)`:

```js
var cdnDetector = require("cdn-detector");

var result = cdnDetector.detect(
    "foo.googleusercontent.com", {
        "gws": "1",
    });
```

If `result` is non-null, the response was served from a CDN:

```json
{
    "cdn": "Google",
    "evidence": {
        "hostname": "\\.googleusercontent\\.com$",
        "headers": [
            "gws: *"
        ]
    }
}
```

### API

#### `CdnDetector.detect(hostname, headers)`

Determines whether the `hostname` and HTTP response `headers` indicate that the resource was served via a known CDN.

**Arguments**:
* `hostname`: The requested resource's hostname, such as `foo.googleusercontent.com`.
* `headers`: The HTTP response headers in map form, such as `{ "Server": "Foo", "Via": "Bar" }`

**Returns**: If no CDN was matched, `null`.  If a CDN was matched, an object with the CDN name and evidence why:

```json
{
    "cdn": "Google",
    "evidence": {
        "hostname": "\\.googleusercontent\\.com$",
        "headers": [
            "gws: *"
        ]
    }
}
```

#### `CdnDetector.detectFromHostname(hostname)`

Determines whether the `hostname` indicates that the resource was served via a known CDN.

**Arguments**:
* `hostname`: The requested resource's hostname, such as `foo.googleusercontent.com`.

**Returns**: If no CDN was matched, `null`.  If a CDN was matched, an object with the CDN name and evidence why.  The
evidence is the regex string that matched the hostname.

```json
{
    "cdn": "Google",
    "evidence": "\\.googleusercontent\\.com$"
}
```

#### `CdnDetector.detectFromHeaders(hostname, headers)`

Determines whether the HTTP response `headers` indicate that the resource was served via a known CDN.

**Arguments**:
* `headers`: The HTTP response headers in map form, such as `{ "Server": "Foo", "Via": "Bar" }`

**Returns**: If no CDN was matched, `null`.  If a CDN was matched, an object with the CDN name and evidence why.  The evidence is an array of HTTP response headers that matched:

```json
{
    "cdn": "Google",
    "evidence": [
        "server: foo"
    ]
}
```

## Data

The data files for hostnames and headers are in the following files:

* `data/headers.json`
* `data/hostnames.json`
* `data/multi-headers.json`

Via `gulp`, these are built as `data/*.js` and are included in the `dist/*.js` files for use on the web.

In NodeJS, these files are used as-is.

## Tests

Tests are provided in the `test/` directory, and can be run via `mocha`:

    mocha test/*

Or via ``gulp``:

    gulp test

## Version History

* v0.1.0 - 2016-08-17: Initial version
* v0.1.1 - 2016-08-17: Changed what inedx points to
* v0.1.2 - 2016-08-17: Fixed module.exports
* v0.1.3 - 2016-10-31: jQuery CDN added
* v0.1.4 - 2017-07-02: CDN list updated
