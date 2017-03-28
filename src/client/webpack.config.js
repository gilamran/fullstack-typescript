var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    './client'
  ],
  output: {
    path: path.join(__dirname, '..', '..', 'dist', 'public'),
    filename: 'client-bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['awesome-typescript-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin()]
};