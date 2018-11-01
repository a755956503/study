var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = parseInt(line.trim())
  var arr = [];
  while(n > 0) {
    if (n % 2) {
      n = (n - 1) / 2;
      arr.unshift(1);
    } else {
      n = (n - 2) / 2;
      arr.unshift(2);
    }
  }
  arr = arr.join('');
  console.log(arr);
});