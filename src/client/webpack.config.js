const path = require('path');
const version = require('../../package.json').version;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const cssnano = require('cssnano');

const config = require('../server/config');
const projectRoot = path.join(__dirname, '..', '..');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'TypeScript and React',
    favicon: 'favicon.ico',
    filename: 'index.html',
    template: 'index.ejs',
  }),
];

if (!config.IS_PRODUCTION) {
  plugins.push(
    new OpenBrowserPlugin({ url: `http://localhost:${config.SERVER_PORT}` }),
  );
}

module.exports = {
  mode: config.IS_PRODUCTION ? 'production' : 'development',
  devtool: config.IS_PRODUCTION ? '' : 'inline-source-map',
  entry: ['./client'],
  output: {
    path: path.join(projectRoot, 'dist', 'public'),
    filename: `[name]-${version}-bundle.js`,
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: !config.IS_PRODUCTION,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !config.IS_PRODUCTION,
              plugins: config.IS_PRODUCTION ? [] : [cssnano()],
            },
          },
        ],
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  plugins,
};
