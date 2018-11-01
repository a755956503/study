var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

// var x = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var w = -1;
var n = -1;
var cur_line = 0;
var arr =[];
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    var str = line.split(' ');
    w = parseInt(str[0].trim());
    n = parseInt(str[1].trim());
  } else {
    var str = line.trim().split('');
    arr.push(str);
    cur_line++;
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断

  function log(out) {
    process.stdout.write('' + out + '\n');
  };
  if (cur_line === n) {
    for (var i = 0; i < arr.length; i++) {
      var arrm = arr[i];
      if (arrm.length > w) {
        log('too long');
      } else {
        var len = arrm.length;
        // console.log(len);
        var ans =String(parseInt((w - len) * 5) / 10);
        if (ans.split('.').length === 1) {
          ans = ans + '.0';
        }
        log(ans);
      }
    }
    // 输出结果
    // 重新初始化相关变量
    n = -1;
    w = -1;
    ans = 0;
    arr = [];
    cur_line = 0;
  }
});
