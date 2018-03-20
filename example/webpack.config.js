const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./example/client/App.jsx",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist/",
    hot: false
  },
  output: {
    filename: "webpack-bundle.js",
    path: path.join(__dirname, "./dist/")
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react", "stage-0"]
          }
        }
      },
      { test: /\.flow$/, loader: "ignore-loader" }
    ]
  }
};
