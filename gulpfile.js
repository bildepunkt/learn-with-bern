var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("watch-dev", ["build-dev"], function() {
    gulp.watch(["src/**/*"], ["build-dev"]);
});

var myDevConfig = Object.create(webpackConfig);
var devCompiler;

gulp.task("build-dev", function(callback) {
    myDevConfig.devtool = "source-map";
    myDevConfig.debug = true;
    // create a single instance of the compiler to allow caching
    devCompiler = webpack(myDevConfig);

    // run webpack
    devCompiler.run(function(err, stats) {
        if (err) throw new gutil.PluginError("build-dev", err);
        gutil.log("[build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});
