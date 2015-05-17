/**
 * For uglify webpack --optimize-minimize
 * @type {webpack|exports}
 */

var webpack = require("webpack");
    path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var options = options || {};
var config = {
    context: path.join(__dirname, "static"),
    entry: {
        app: "./js/app.js"
    },
    output: {
        path: "static/build",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("style.css")
    ],
    devServer: {
        contentBase: "static/",
        info: false, //  --no-info option
        hot: true,
        inline: true
    }
};

if (options.uglify) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;