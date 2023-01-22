const path = require('path');
// module.exports = {
//   entry: path.resolve(process.cwd(), './src/base/index.js'),
//   mode: 'development'
// }

module.exports = {
  entry: path.resolve(process.cwd(), './src/base/lib.js'),
  output: {
    library: '[name]',
    libraryTarget: 'umd'
  },
  mode: 'none',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /(\.js)$/,
        exclude: /node_modules/
      }
    ]
  }
}