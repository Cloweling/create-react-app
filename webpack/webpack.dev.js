const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.js"),
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, "public"),
        compress: true,
    },
});
