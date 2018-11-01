// function xx(line) {
//   var n = parseInt(line.trim());
//   var ans = 0;
//   var arr = [];
//   var flag = -1;
//   var i = 1;
//   arr[i] = [0,1];
//   while(i) {
//     var a = arr[i];
//     var b = [];
//     for (var j = 1; j < i+1; j++) {
//       if (!a[j]) {
//         a[j] = 0;
//       }
//       if (!a[j-1]) {
//         a[j-1] = 0;
//       }
//       b[j] = a[j] + a[j-1];
//     }
//     i++;
//     arr[i] = b;
//     if (arr[i][parseInt((i+1)/2)] > n && arr[i][parseInt((i+1)/2)] === n) {
//       flag = i;
//       break;
//     }
//   }
//   return
// }
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = parseInt(line.trim());
  var ans = 0;
  var arr = [];
  var flag = -1;
  var i = 1;
  arr[i] = [0,1];
  while(i) {
    var a = arr[i];
    var b = [];
    for (var j = 1; j < i+1; j++) {
      if (!a[j]) {
        a[j] = 0;
      }
      if (!a[j-1]) {
        a[j-1] = 0;
      }
      b[j] = a[j] + a[j-1];
    }
    i++;
    arr[i] = b;
    if (arr[i][parseInt((i+1)/2)] > n || arr[i][parseInt((i+1)/2)] === n) {
      flag = i-1;
      break;
    }
  }
  if (n === 1) {
    flag = 1;
  }
  console.log(flag);
});