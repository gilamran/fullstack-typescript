const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = false;

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './client'
  ],
  output: {
    path: path.join(__dirname, '..', '..', '..', 'dist', 'public'),
    filename: 'client-bundle.js',
    publicPath: production ? '/public/' : 'http://localhost:8080/public/'
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