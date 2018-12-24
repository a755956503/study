const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config');
module.exports = {
  entry: [require.resolve('babel-polyfill'), path.resolve(__dirname, '../js/index.js')],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: '[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: config.distPath,
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: require.resolve('babel-loader')
        }]
      },
      {
        test: /\.(css|less|scss)$/,
        use: [{
          loader: require.resolve('style-loader')
        }, {
          loader: require.resolve('css-loader')
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}