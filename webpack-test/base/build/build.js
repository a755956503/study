var webpack = require('webpack');
// var webpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.config.prod');
// const config = require('./config');
// webpack(webpackConfig, (err, stats) => {
//   console.log('err', err);
//   console.log('stats', stats.toJson().errors);
// })
const compiler = webpack(webpackConfig)
// const serverConfig = {
//   contentBase: config.distPath,
//   compress: true,
//   port: 9000,
//   hot: true,
// }
// const server = new webpackDevServer(compiler, serverConfig);
// server.listen(9000);
compiler.run((err, stats) => {
  console.log('err', err);
  console.log('stats', stats.toJson().errors);
})