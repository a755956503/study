var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var input = JSON.parse(line.trim());
  var out = {};
  fun(input,out);
  function fun(obj,res) {
    var keys = Object.keys(obj);
    if (keys.length > 0) {
      for (var i = 0; i < keys.length; i++) {
        var upper;
        if (obj[keys[i]] instanceof Object) {
          upper = keys[i].slice(0,1).toUpperCase() + keys[i].slice(1);
          res[upper] = obj[keys[i]];;
          fun(obj[keys[i]], res[upper]);
        } else {
          upper = keys[i].slice(0,1).toUpperCase() + keys[i].slice(1);
          res[upper] = obj[keys[i]];
        }
      }
    }
  }
  console.log(out);
});
var aa = {   "myKey": {"myKey": "myValue"}, "aa":null, "bb": {},"cc": 33 }