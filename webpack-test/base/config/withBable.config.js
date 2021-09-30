const path = require('path');
module.exports = {
  entry: path.resolve(process.cwd(), './src/base/index.js'),
  mode: 'development',
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