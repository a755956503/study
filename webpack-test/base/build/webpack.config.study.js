const path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
  output: {
    // 使用cdn地址替换html中的引用地址
    publicPath: '//js.cdn.com/static/js/'
  },
  module: {
    relus: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'], // babel-loader支持缓存
        includes: path.resolve(__dirname, './src'), // 缩小编译目录，因为编译是非常耗资源的
      },{
        test: /\.(less|css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 
           {
              loader: 'css-loader?minimize'// css压缩
            },{
              loader: 'postcss-loader',
              options: {
                indent: 'postcss',
                plugin:() => [
                  require('postcss-flexbugs-fixes'), 
                  // 主要是flex里0的问题，有时候输出会少0或者多0
                  // https://github.com/luisrudge/postcss-flexbugs-fixes
                  require('precss'), // 和less之类功能重复，用less时不需要用这个，可能会有冲突，比如语法相同时。
                  autoprefixer({ //自动添加浏览器前缀
                    browsers: [ //给哪些浏览器添加前缀
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR', // 火狐长期支持版，就是不需要经常更新的版本
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                    // 是否给flex添加前缀，默认为ture，'no-2009'只给ie和最新版本浏览器添加
                  })
                ]
              }
            }
          ],
          publicPath: '//css.cdn.com/css' //设置被css引入的资源的地址，注意不是设置css本身的地址。
        })
      },{
        test: /\.(png)$/,
        use: ['file-loader?name=[name]_[hash:8].[ext]']
      }, {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 4000,
          name: 'static3/media/[name].[hash:8].[ext]',
          fallback: 'responsive-loader',
          quality: 85,
          mimetype: 'image/png' //转换后缀

        },
      },
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
      template: config.indexPath,
      stylePublicPath: '//css.cdn.com/' // 多余的，不设置webpack也能对css路径正确设置。
    }),
    // new webpack.NamedModulesPlugin(), 
    // 在特替换时会console替换的模块，以前是数字，用这个插件显示对应的文件名。最新的webpack支持这个，应该不需要了。
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:''
    }),
    // 将css抽离成单独的文件
    new ExtractTextPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}