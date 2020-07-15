const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    "main-authorized": [
      //"webpack/hot/dev-server",
      //"webpack-hot-middleware/client",
      "./js/main-authorized.js",
    ],
    main: ["./js/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
    publicPath: "/dist",
  },
  //plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
