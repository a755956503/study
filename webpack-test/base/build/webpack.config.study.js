const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    relus: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'], // babel-loader支持缓存
        includes: path.resolve(__dirname, './src'), // 缩小编译目录，因为编译是非常耗资源的
      }
    ],
    noParse: [/\.react\.min\.js$/], // 针对非模块化文件优化。
  },
  watch: true,
  watchOptions: {
    ignored : / node modules/,
    aggregateTimeout : 300,                                                  
    poll: 1000
  },
  resolve: {
    // 用绝对路径减少搜索步骤
    modules: [path.resolve(__dirname, 'node_modules')],
    // 使用.min.js作为入口，减少webpack合并编译文件的时间。会影响tree-sharking去除无效代码。
    alias: {
      'react': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
    },
    extensions : ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath
    }),
    // new webpack.NamedModulesPlugin(), 
    // 在特替换时会console替换的模块，以前是数字，用这个插件显示对应的文件名。最新的webpack支持这个，应该不需要了。
    new webpack.HotModuleReplacementPlugin()
  ]
}