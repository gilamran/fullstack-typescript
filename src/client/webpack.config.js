const path = require('path');
const webpack = require('webpack');
const version = require('../../package.json').version;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = require('../server/config');
const projectRoot = path.join(__dirname, '..', '..');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'TypeScript and React',
    favicon: 'favicon.ico',
    filename: 'index.html',
    template: 'index.ejs'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: ({resource}) => /node_modules/.test(resource),
  })
];

if (!config.IS_PRODUCTION) {
  plugins.push(new OpenBrowserPlugin({url: `http://localhost:${config.SERVER_PORT}`}));
}

module.exports = {
  devtool: config.IS_PRODUCTION ? '' : 'inline-source-map',
  entry: ['babel-polyfill', './client'],
  output: {
    path: path.join(projectRoot, 'dist', 'public'),
    filename: `[name]-${version}-bundle.js`,
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: !config.IS_PRODUCTION,
              minimize: config.IS_PRODUCTION
            }
          }
        ]
      }
    ]
  },
  plugins
};