function one(arr,arrm) {
  var ans = 0;
  for (var i = 0; i < arrm.length; i ++) {
    var cv = arrm[i];
    var newArr = arr.slice(0);
    var index = match(newArr,cv);
    if (index) {
      ans++;
    }
  }
  function match(maps, num) {
    if (num < 0 ) {
      return false;
    }
    for (var i = 0;i < maps.length; i++) {
      if(maps[i] === num) {
        return true;
      } else {
        var newNum = num - maps[i];
        var newMaps = Array.prototype.concat(maps.slice(0,i),maps.slice(i+1));
        return match(newMaps,newNum);
      }
    }
  }
  console.log(ans);
}
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var arr = -1;
var arrm = [];
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    var str = line.split(' ');
    n = parseInt(str[1].trim())
  } else if (arr === -1){
    var str = line.split(' ');
    arr = [];
    for(var i = 0;i< str.length; i++) {
      arr.push(Number(str[i]));
    }
  } else {
    var x = Number(line.trim());
    arrm.push(x);
    cur_line ++;
  }
  // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
  if (cur_line === n) {
    ans = 0;
    var flag = new Array(arr.length);
    flag = flag.fill(1);
    for (var i = 0; i < arrm.length; i ++) {
      var cv = arrm[i];
      // var newArr = arr.slice(0);
      // var index = match(newArr,cv);
      flag = flag.fill(1);
      var index = match(arr,cv, flag);
      if (index) {
        ans++;
      }
    }
    function match(maps, num,flag) {
      if (num < 0 ) {
        return false;
      }
      for (var i = 0;i < maps.length; i++) {
        if (flag[i] !== -1) {
          if(maps[i] === num) {
            return true;
          } else {
            var newNum = num - maps[i];
            // var newMaps = Array.prototype.concat(maps.slice(0,i),maps.slice(i+1));
            //var newMaps = maps.splice(i,1);
            flag[i] = -1;
            return match(maps,newNum,flag);
          }
        }
      }
    }
    // 输出结果
    console.log(ans);
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    arr = -1;
    arrm = [];
    cur_line = 0;
  }
});
