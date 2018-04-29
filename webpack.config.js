const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "client/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "client/index.js"),
    output: {
        path: path.join(__dirname, "/dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        alias: {
          css        : 'client/css',
          actions    : 'client/js/actions',
          components : 'client/js/components',
          reducers   : 'client/js/reducers',
          store      : 'client/js/store',
        },
        extensions: [".js", ".jsx", ".css"]
    },
    devServer: {
        port: 3001
    }
};