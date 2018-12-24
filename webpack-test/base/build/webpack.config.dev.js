var baseConfig = require('./webpack.config.base');
var config = require('./config');
var webpack = require('webpack');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(baseConfig, {
  entry: ['webpack-dev-server/client?http://localhost:9000/',
  'webpack/hot/dev-server', path.resolve(__dirname, '../js/index.js')],
  mode: 'development',
  devServer: {
    contentBase: config.distPath,
    compress: true,
    port: 9000,
    hot: true,
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath
    }),
    // new webpack.NamedModulesPlugin(), 在
    new webpack.HotModuleReplacementPlugin()
  ]
})