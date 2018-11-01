var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

// var x = -1;// 初始状态为负数，表示还没开始读取
// var ans = 0;
var n = -1;
var cur_line = 0;
// var arr =[];
var x = 0;
var y = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    n = parseInt(line.trim());
  } else {
    cur_line++;
    var str = line.trim().split(' ');
    var a = parseInt(str[0]);
    var b = parseInt(str[1]);
    var c = parseInt(str[2]);
    if (a === 1) {
      x += b * c;
    } else if (a === 2) {
      y += b * c;
    }
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断

  function log(out) {
    process.stdout.write('' + out + '\n');
  };
  if (cur_line === n) {
    var s = 'N'; 
    if (y / (x + y) > 0.75) {
      s = 'Y';
    }
    var ans = x + ' ' + y + ' ' + s;
    log(ans);
    // 输出结果
    // 重新初始化相关变量
    n = -1;
    // arr = [];
    cur_line = 0;
    x = 0;
    y = 0;
  }
});
