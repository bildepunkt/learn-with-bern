var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: [
        "./src/main.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "dist/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                //exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
