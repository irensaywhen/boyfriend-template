const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    "main-authorized": "./js/main-authorized.js",
    main: "./js/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
  },
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
};
