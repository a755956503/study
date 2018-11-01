var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var line1 = '';// 初始状态为负数，表示还没开始读取
var ans = 0;
var line2 = '';
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (line1 === '') { // 测试用例第一行
    line1 = String(line);
  } else {
    // 输出位数
    line2 = Number(line);
    arr = line1.split(' ');
    arr.sort(function(a,b){
      var num1 = Number(('00'+ a).slice(-3));
      var num2 = Number(('00'+ b).slice(-3));
      return num1 - num2;
    })
    ans = arr[line2-1];
    // 记录当前读取的行数
    cur_line = 1;

  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === 1) {
    console.log(ans);
    line1 = '';
    ans = 0;
    line2 = '';
    cur_line = 0;
  }
});
function h2(line,i) {
  var n = String(line);
  var arr = n.split(' ');
  arr.sort(function(a,b){
    var num1 = Number(('00'+ a).slice(-3));
    var num2 = Number(('00'+ b).slice(-3));
    return num1 - num2;
  })
  console.log(arr[i-1]);
}
var str2 = '1223 22 3232 2016';
h2(str2);




