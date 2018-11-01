/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
function fun(arr,p,x) {
  var data = [];
  data.push(1);
  for (var i = 1; i <= x; i++) {
    var insert = [];
    for (var j = 0; j < data.length; j++) {
      var cv = data[j]
      if (cv > p) {
        continue;
      } else if (arr.indexOf(cv) !== -1) {
        insert.push(2);
      }
      data[j]++;
    }
    data = data.concat(insert);
  }
  for (var j = 0; j < data.length; j++) {
    var cv = data[j]
    if (cv > p) {
      data.splice(j,1);
      j--;
    }
  }
  return data.length;
}
/******************************结束写代码******************************/


var res;
var arr = read_line().split(' ');
var p = Number(read_line());
var x = Number(read_line());
for (var i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i]);
}
res = fun(arr,p,x);
print(res);