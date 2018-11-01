function f1 (line) {
  var n = line.trim();
  var arr = n.split(' ');
  arr.unshift(0);
  // {
  //   data: 1,
  //     parent: null,
  //   left: null,
  //   right: null,
  // }
  var btree = [];
  var ans = [];
  // for (var i = 1; i < arr.length; i++) {
  //   fun(i,arr.length);
  // }
  fun(1,arr.length+1);
  function fun(i,m) {
    if (!btree[i]) {
      btree[i] = 1;
      ans.push(arr[i]);
    } else if (i * 2 <= m) {
      fun(i*2, m);
    } else if ( i * 2 +1 <= m) {
      fun(i*2+1, m);
    }
  }
}
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = line.trim();
  var arr = n.split(',');
  arr.unshift(0);
  // {
  //   data: 1,
  //     parent: null,
  //   left: null,
  //   right: null,
  // }
  var btree = [];
  var ans = [];
  // for (var i = 1; i < arr.length; i++) {
  //   fun(i,arr.length);
  // }
  fun(1,arr.length - 1);
  function fun(i,m) {
    if (!btree[i] && i !== 0) {
      btree[i] = 1;
      ans.push(arr[i]);
    }
    if (i * 2 <= m) {
      fun(i*2, m);
    }
    if ( i * 2 +1 <= m) {
      fun(i*2+1, m);
    }
  }
  console.log(ans.join(','));
});