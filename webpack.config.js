var path = require("path");
module.exports = {
    context: path.join(__dirname, "static"),
    entry: "./js/app.js",
    loaders: [
        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle[hash].js"
    }
}