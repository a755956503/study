
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = String(line);
  var arr = n.split('');
  var index = '';
  if (arr[0] === '-') {
    index = arr.shift();
  }
  var length = arr.length;
  var ans1 = '';
  var ans2 = '';
  if (index !== '') {
    ans1 = index;
    ans2 = index;
  }
  for (var i = 0;i < arr.length; i++) {
    ans1 += arr[i] + ' ';
    ans2 += arr[arr.length - 1 -i];
  }
  ans1[ans1.length] = '';
  console.log(length);
  console.log(ans1);
  console.log(ans2);
});
function h1(line) {
  var n = String(line);
  var arr = n.split('');
  var index = '';
  if (arr[0] === '-') {
    index = arr.shift();
  }
  var length = arr.length;
  var ans1 = '';
  var ans2 = '';
  if (index !== '') {
    ans1 = index;
    ans2 = index;
  }
  for (var i = 0;i < arr.length; i++) {
    ans1 += arr[i] + ' ';
    ans2 += arr[arr.length - 1 -i];
  }
  ans1=ans1.slice(0,-1);
  console.log(length);
  console.log(ans1);
  console.log(ans2);
}
var str1 = -12345;