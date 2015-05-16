var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.join(__dirname, "static"),
    entry: ["./js/app.js", "./js/style.js"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle[hash].js"
    },
    loaders: [
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }
    ],
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
}