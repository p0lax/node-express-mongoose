/**
 * For uglify webpack --optimize-minimize
 * @type {webpack|exports}
 */
var webpack = require("webpack");
    path = require("path"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WebpackDevServer = require('webpack-dev-server');

var options = options || {};
var config = {
    context: path.join(__dirname, "static"),
    entry: {
        app: "./js/app.js"
    },
    output: {
        path: path.join(__dirname, "build"),
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
            },
            { test: /\.(png|jpeg)$/, loader: 'url-loader?limit=20000' }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("style.css")
    ],
    devServer: {
        publicPath: "/build",
        info: false, //  --no-info option
        hot: true,
        inline: true,
        port: 3000
    }
};

if (options.uglify) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;