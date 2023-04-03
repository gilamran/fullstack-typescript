import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import type { Configuration, WebpackPluginInstance } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import { IS_DEV, SERVER_PORT, WEBPACK_PORT } from './src/server/config';

const plugins: WebpackPluginInstance[] = [new ForkTsCheckerWebpackPlugin(), new WebpackManifestPlugin({})];

if (IS_DEV) {
  plugins.push(new ReactRefreshPlugin());
}

// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// plugins.push(new BundleAnalyzerPlugin());

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const devServer: DevServerConfiguration = {
  port: WEBPACK_PORT,
  client: {
    overlay: IS_DEV,
  },
  open: IS_DEV ? [`http://localhost:${SERVER_PORT}`] : false,
};

const config: Configuration = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'inline-source-map' : false,
  entry: ['./src/client/client'],
  output: {
    path: path.join(__dirname, 'dist', 'statics'),
    filename: `[name]-[contenthash]-bundle.js`,
    chunkFilename: '[name]-[contenthash]-bundle.js',
    publicPath: '/statics/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: !IS_DEV,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        material: {
          test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
          name: 'material-ui',
          chunks: 'all',
          priority: 20,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: [/node_modules/, nodeModulesPath],
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  target: 'web',
  devServer,
  plugins,
};

export default config;
