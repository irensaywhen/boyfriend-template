const path = require('path');
const webpack = require('webpack');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'main-authorized': [
      //"webpack/hot/dev-server",
      //"webpack-hot-middleware/client",
      './js/main-authorized.js',
    ],
    main: ['./js/main.js'],
    'main-landing': ['./js/main-landing.js', './js/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js',
    publicPath: '/dist',
  },
  //plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['pl'],
    }),
  ],
  devtool: 'source-map',
  mode: 'development',
};
