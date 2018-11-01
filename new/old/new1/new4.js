window.str3 = ['1.1.1.1',
  '255.255.255.255',
  '2.2.2.2',
  '3.3.3.3'];
function h3(arr) {
  var lines = [];
  var index = false;
  for (var i = 0; i < arr.length; i++) {
    var m = arr[i].split('.');
    var str = 0;
    for (var j = 0;j<m.length;j++) {
      str = str * 256 + Number(m[j]);
    }
    lines[i] = str;
  }
  if ( lines[0] < lines[3]) {
    if (lines[1] > lines[2])
      index3 = false;
  } else {

  }
  if (index3) {
    ans = 'Overlap IP';
  } else {
    ans = 'No Overlap IP';
  }
  return ans;
}
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var arr = [];// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (cur_line < 3) {
    line = line.trim();
    arr[cur_line] = line;
    cur_line++;
  } else {
    arr[cur_line] = line.trim();
    var lines = [];
    var index3 = true;
    var index4 = true;
    for (var i = 0; i < arr.length; i++) {
      var m = arr[i].split('.');
      var str = 0;
      for (var j = 0;j<m.length;j++) {
        str = str * 256 + Number(m[j]);
      }
      lines[i] = str;
    }
    if ( Number(lines[3]) < Number(lines[1]) || Number(lines[3]) > Number(lines[2])) {
      index3 = false;
    }
    if(Number(lines[4]) < Number(lines[1]) || Number(lines[4]) > Number(lines[2])){
      index4 = false;
    }
    if (index4 || index3) {
      ans = 'Overlap IP';
    } else {
      ans = 'No Overlap IP';
    }
    cur_line++;
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === 4) {
    console.log(ans);
    ans = 0;
    cur_line = 0;
    arr = [];
  }
});