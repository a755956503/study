var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var arr = line.trim().split('');
  var ans = 0;
  var flag = -1;
  for (var i = 0, j = arr.length -1; i< arr.length && j > -1;) {
    if (arr[i] !== arr[j]) {
      if (flag === -1) {
        flag = i;
        j++;
      } else if (j === flag) {
        i--;
      } else {
        flag = -2;
        break;
      }
    }
    i++;
    j--;
  }
  if (flag === -2) {
    ans = 0;
  } else {
    ans = 1;
  }
  console.log(ans);
});