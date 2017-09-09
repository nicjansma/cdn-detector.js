/* eslint-env node */
(function() {
    "use strict";

    //
    // Imports
    //
    var fs = require("fs");
    var gulp = require("gulp");
    var eslint = require("gulp-eslint");
    var uglify = require("gulp-uglify");
    var mocha = require("gulp-spawn-mocha");
    var Server = require("karma").Server;
    var path = require("path");
    var bower = require("gulp-bower");
    var mergeJson = require("gulp-merge-json");
    var concat = require("gulp-concat");
    var debug = require("gulp-debug");
    var es = require("event-stream");

    //
    // Constants
    //
    var SOURCE_FILES = [
        "data/headers.js",
        "data/hostnames.js",
        "data/multi-headers.js",
        "src/cdn-detector.js"
    ];

    //
    // Task Definitions
    //
    gulp.task("lint", function() {
        return gulp.src(["*.js", "src/*.js", "test/*.js"])
            .pipe(eslint())
            .pipe(eslint.format());
    });

    gulp.task("lint:build", function() {
        return gulp.src(["*.js", "src/*.js", "test/*.js"])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.format("checkstyle", fs.createWriteStream("eslint.xml")));
    });

    gulp.task("merge-json", function() {
        return es.merge(
            gulp.src("data/headers.json")
                .pipe(mergeJson("headers.js", false, [], false, "var CdnDetectorHeaders"))
                .pipe(gulp.dest("./data")),

            gulp.src("data/hostnames.json")
                .pipe(mergeJson("hostnames.js", false, false, false, "var CdnDetectorHostnames"))
                .pipe(gulp.dest("./data")),

            gulp.src("data/multi-headers.json")
                .pipe(mergeJson("multi-headers.js", false, [], false, "var CdnDetectorMultiHeaders"))
                .pipe(gulp.dest("./data"))
        );
    });

    gulp.task("dist", ["merge-json"], function() {
        return gulp.src(SOURCE_FILES)
            .pipe(debug())
            .pipe(concat("cdn-detector.js"))
            .pipe(gulp.dest("dist"));
    });

    gulp.task("compress", ["merge-json"], function() {
        return gulp.src(SOURCE_FILES)
            .pipe(concat("cdn-detector.min.js"))
            .pipe(uglify({ mangle: true }))
            .pipe(gulp.dest("dist"));
    });

    gulp.task("mocha", function() {
        return gulp.src("test/test.js",
            {
                read: false
            })
            .pipe(mocha());
    });

    gulp.task("mocha-tap", ["mocha"], function() {
        return gulp.src(
            "test/test.js",
            {
                read: false
            })
            .pipe(mocha({
                reporter: "tap",
                output: "./test/mocha.tap"
            }));
    });

    gulp.task("bower", function() {
        return bower();
    });

    gulp.task("karma", ["bower", "mocha", "mocha-tap", "dist", "compress"], function(done) {
        new Server({
            configFile: path.join(__dirname, "karma.config.js"),
            singleRun: true
        }, done).start();
    });

    gulp.task("all", ["default"]);
    gulp.task("test", ["mocha", "mocha-tap", "karma"]);
    gulp.task("default", ["bower", "lint", "lint:build", "merge-json", "dist", "compress", "test"]);
    gulp.task("travis", ["default"]);
}());
