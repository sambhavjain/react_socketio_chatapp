const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "client/index.html"),
    filename: "./index.html"
});
module.exports = {
  entry:[
    'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', 
    path.join(__dirname, "client/index.js")
  ],
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
  plugins: [  
    htmlWebpackPlugin, 
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.SplitChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(), //For hot reloading
    new UglifyJsPlugin({
      uglifyOptions: {
        parallel: true,
        warning: false,
        compress: {
          drop_console: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      css        : path.resolve(__dirname,'client/css'),
      actions    : path.resolve(__dirname,'client/js/actions'),
      components : path.resolve(__dirname,'client/js/components'),
      reducers   : path.resolve(__dirname,'client/js/reducers'),
      store      : path.resolve(__dirname,'client/js/store'),
    },
    extensions: [".js", ".jsx", ".css"]
  },
  devServer: {
    port: 3001
  }
};