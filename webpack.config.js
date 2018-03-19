const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
  app: path.join(__dirname, "src", "index.tsx"),
  build: path.join(__dirname, "dist")
};


module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  context: path.resolve(__dirname, "src"),
  entry: ["react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8081", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx"],
  output: {
    path: PATHS.build,
    filename: "[name].js",
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    hot: true,
    inline: true,
    publicPath: "/",
    contentBase: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "index.html" })
  ]
};
