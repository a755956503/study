var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = parseInt(line.trim())
  var arr = [];
  arr.push(1);
  var i = 1;
  while(arr.length < n) {
    i++;
    var x = i;
    var index = true;
    while(index) {
       if (x % 2 === 0) {
         x = x / 2;
       } else if (x % 3 === 0) {
         x = x / 3;
       } else if (x % 5 === 0) {
         x = x / 5;
       } else {
         index = false;
       }
    }
    if (x === 1) {
      arr.push(i);
    }
  }
  console.log(arr.pop());
});