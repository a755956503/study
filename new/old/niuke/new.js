// var name = 5;
// function a() {
//   var self = this;
//   console.log(this.name);
//   console.log(self.name);
//   ((function () {
//     console.log(this.name);
//     console.log(self.name);
//   })());
// }
// var x;
// x.a = a;
// x.name =100;
// x.a();
var dd = ['.S#..E','.#.0..','......'];
function fun2 (n,m,arr) {
  for (var i=0;i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }
  var data = [];
  var start = null;
  var end = null;
  var zero = null;
  for (var i = 0; i<n; i++) {
    for (var j = 0; j< m; j++) {
      if (arr[i][j] === 'S') {
        start = [i, j];
      } else if (arr[i][j] === 'E') {
        end = [i, j];
      } else if (arr[i][j] === '0') {
        zero = [i,j];
      }
    }
    // if (start && end) {
    //   break;
    // }
  }
  function fun(s, e) {
    var fi = e[0];
    var fj = e[1];
    if (arr[fi, fj]){
      return 100000;
    }
    arr[fi,fj] = 1;
    if (arr[fi][fj] === '#' || s[0] >= n || e[0] < 0 || s[1] >= m || e[1] <= 0) {
      return 100000;
    }
    if (s[0] === e[0] && s[1] === e[1]) {
      return 0;
    }
    var mins = [];
    var min = 0;
    if (fi + 1 < n) {
      min = fun(s,[fi+1,fj]);
      mins.push(min);
    }
    if (fi > 0) {
      min = fun(s,[fi-1,fj]);
      mins.push(min);
    }
    if (fj > 0) {
      min = fun(s,[fi,fj-1]);
      mins.push(min);
    }
    if (fj +1 < m) {
      min = fun(s,[fi,j+1]);
      mins.push(min);
    }
    mins.sort(function(a,b){
      return a - b;
    })
    return mins[0] + 1;
  }
  function fun1(s, e) {
    var fi = e[0];
    var fj = e[1];
    if (arr[fi][fj] === '#') {
      return Infinity;
    }
    if (s[0] === e[0] && s[1] === e[1]) {
      return 0;
    }
    var mins = [];
    var min = 0;
    if (fi < m) {
      min = fun(s,[fi+1,fj]);
      mins.push(min);
    }
    if (fi > 1) {
      min = fun(s,[fi-1,fj]);
      mins.push(min);
    }
    if (fj > 1) {
      min = fun(s,[fi,fj-1]);
      mins.push(min);
    }
    if (fj < m) {
      min = fun(s,[fi,j+1]);
      mins.push(min);
    }
    mins.sort(function(a,b){
      return a - b;
    })
    return mins[0] + 1;
  }

  ans = fun(start, zero) + fun1(zero, end);
  // 输出结果
  console.log(ans);
}
// 动态规划
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var m = -1;
var arr = [];
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n === -1) { // 测试用例第一行读取n
    var num = line.trim().split('');
    n = Number(num[0]);
    m = Number(num[1]);
  } else {
      var x = line.trim().split('');
      arr[cur_line] = x;
      // 记录当前读取的行数
      cur_line++;
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === n) {
    var data = [];
    var start = null;
    var end = null;
    var zero = null;
    for (var i = 0; i<n; i++) {
      for (var j = 0; j< m; j++) {
        if (arr[i][j] === 'S') {
          start = [i, j];
        } else if (arr[i][j] === 'E') {
          end = [i, j];
        } else if (arr[i][j] === '0') {
          zero = [i,j];
        }
      }
      // if (start && end) {
      //   break;
      // }
    }
    function fun(s, e) {
      var fi = e[0];
      var fj = e[1];
      if (arr[fi][fj] === '#') {
        return Infinity;
      }
      if (s[0] === e[0] && s[1] === e[1]) {
        return 0;
      }
      var mins = [];
      var min = 0;
      if (fi + 1 < n) {
        min = fun(s,[fi+1,fj]);
        mins.push(min);
      }
      if (fi > 0) {
        min = fun(s,[fi-1,fj]);
        mins.push(min);
      }
      if (fj > 0) {
        min = fun(s,[fi,fj-1]);
        mins.push(min);
      }
      if (fj +1 < m) {
        min = fun(s,[fi,j+1]);
        mins.push(min);
      }
      mins.sort(function(a,b){
        return a - b;
      })
      return mins[0] + 1;
    }
    function fun1(s, e) {
      var fi = e[0];
      var fj = e[1];
      if (arr[fi][fj] === '#') {
        return Infinity;
      }
      if (s[0] === e[0] && s[1] === e[1]) {
        return 0;
      }
      var mins = [];
      var min = 0;
      if (fi < m) {
        min = fun(s,[fi+1,fj]);
        mins.push(min);
      }
      if (fi > 1) {
        min = fun(s,[fi-1,fj]);
        mins.push(min);
      }
      if (fj > 1) {
        min = fun(s,[fi,fj-1]);
        mins.push(min);
      }
      if (fj < m) {
        min = fun(s,[fi,j+1]);
        mins.push(min);
      }
      mins.sort(function(a,b){
        return a - b;
      })
      return mins[0] + 1;
    }

    ans = fun(start, zero) + fun1(zero, end);
    // 输出结果
    console.log(ans);
    // 重新初始化相关变量
    n = -1;
    m = -1;
    ans = 0;
    cur_line = 0;
  }
});