const path = require('path');
// module.exports = {
//   entry: path.resolve(process.cwd(), './src/base/index.js'),
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         use: 'babel-loader',
//         test: /(\.js)$/,
//         exclude: /node_modules/
//       }
//     ]
//   }
// }
module.exports = {
  entry: path.resolve(process.cwd(), './src/withBase/lib.js'),
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