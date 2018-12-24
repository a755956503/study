const path = require('path');
const basePath = path.resolve(__dirname ,'../');
module.exports = {
  basePath: basePath,
  distPath: path.resolve(basePath, 'dist'),
  indexPath: path.resolve(basePath, 'dist/index.html')
}