var path = require('path');
const fs = require('fs');
const url = require('url');
const appDirectory = fs.realpathSync(process.cwd());
const newpath = path.resolve(appDirectory, 'package.json');
var data = require(newpath).main;
console.log(data);