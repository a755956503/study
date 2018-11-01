var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var btree = [{
  data: 1,
  parent: null,
  left: null,
  right: null,
}];
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    n = parseInt(line.trim())
  } else if (cur_line < n-1){
    var row = line.split(' ');
    var data = Number(row[0]);
    var parent = Number((row[1]));
    var child = Number(row[2]);
    var index = btree.length;
    for (var i = 0;i < btree.length; i++) {
      var cv = btree[i];
      if (parent === cv.data) {
        if ( child === -1) {
          btree[i].left = index;
        } else {
          btree[i].right = index;
        }
        parent = i;
        break;
      }
    }
    btree.push({
      data: data,
      parent: parent,
      left: null,
      right: null,
    });
    // 记录当前读取的行数
    cur_line ++;

  } else {
    var x = Number(line.trim());
    var data;
    for (var i = 0; i < btree.length; i++) {
      if (btree[i].data === x) {
        data = btree[i];
        break;
      }
    }
    ans = 0;
    function black(node) {
      if (node && node.data) {
        ans++;
      }
      if (node.left) {
        black(btree[node.left]);
      }
      if (node.right) {
        black(btree[node.right]);
      }
    }
    black(data);
    cur_line ++;
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === n) {

    // 输出结果
    console.log(ans);
    // 重新初始化相关变量
    n = -1;
    btree = [{
      data: 1,
      parent: null,
      left: null,
      right: null,
    }];
    ans = 0;
    cur_line = 0;
  }
});