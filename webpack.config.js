const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const cssnano = require('cssnano');

const config = require('./src/server/config');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const plugins = [new ManifestPlugin()];

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//plugins.push(new BundleAnalyzerPlugin());

if (!config.IS_PRODUCTION) {
  plugins.push(new OpenBrowserPlugin({ url: `http://localhost:${config.SERVER_PORT}` }));
}

module.exports = {
  mode: config.IS_PRODUCTION ? 'production' : 'development',
  devtool: config.IS_PRODUCTION ? '' : 'inline-source-map',
  entry: ['@babel/polyfill', './src/client/client'],
  output: {
    path: path.join(__dirname, 'dist', 'statics'),
    filename: `[name]-[hash:8]-bundle.js`,
    publicPath: '/statics/',
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
        exclude: [/node_modules/, nodeModulesPath],
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
  devServer: {
    port: config.WEBPACK_PORT,
  },
  plugins,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
