var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    n = parseInt(line.trim())
  } else {
    // 矩阵数据读取
    var tokens = line.split(' ');
    var mid = 0;
    for (var i = 0; i < tokens.length; ++i) {
      var cv = parseInt(tokens[i]);
      if (cv === 0) {
        ans++;
        mid = 0;
      } else {
        if ((cv ^ mid) !== 0) {
          mid = cv ^ mid;
        } else {
          mid = 0;
          ans++;
        }
      }
    }
    // 记录当前读取的行数
    cur_line = 1;

  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === 1) {
    // 输出结果
    console.log(ans);
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    cur_line = 0;
  }
});
