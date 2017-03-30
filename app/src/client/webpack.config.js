const path = require('path');
const webpack = require('webpack');

const production = false;
const projectRoot = path.join(__dirname, '..', '..', '..');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './client'
  },
  output: {
    path: path.join(projectRoot, 'dist', 'public'),
    filename: '[name]-bundle.js',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    })
  ]
};