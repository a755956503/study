var baseConfig = require('./webpack.config.base');
var webpack = require('webpack');
var config = require('./config');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

/** merge
 * value为数组的话，会拼起来，所以如果在.base.js也配置数组entry会出错。
 */
module.exports = merge(baseConfig, {
  entry: {
    "index": path.resolve(__dirname, '../js/index.js'),
    // "index1": path.resolve(__dirname, '../js/index1.js'),
  },
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks:{
      chunks: 'all',
      name: true,
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        base: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'base',
        },
        common: {
          minChunks: 1,
          name: 'common',
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath
    }),
    // new webpack.optimize.SplitChunksPlugin({
    //   chunks: 'all',
    //   name: true,
    //   minChunks: 1,
    //   minSize: 1,
    // }),
    // new BundleAnalyzerPlugin()
  ]
})