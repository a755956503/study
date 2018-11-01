/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
function fun1(arr,p,x) {
  var data = [];
  data.push(1);
  for (var i = 1; i <= x; i++) {
    var insert = [];
    var count = 0;
    for (var j = 0; j < data.length; j++) {
      var cv = data[j]
      if (cv > p) {
        count = j;
        continue;
      } else if (arr.indexOf(cv) !== -1) {
        insert.push(2);
      }
      data[j]++;
    }
    data.splice(0,count);
    data = data.concat(insert);
  }
  return data.length;
}
/******************************结束写代码******************************/


// var arr;
// var p, x;
// var res;
// while((arr=read_line())!=null && (p=read_line())!=null && (x=read_line())!=null){
//   arr = arr.split(' ');
//   p = Number(p);
//   x = Number(x);
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = Number(arr[i]);
//   }
//   res = fun(arr,p,x);
//   print(res);
// }
var res;
var arr = read_line().split(' ');
var p = Number(read_line());
var x = Number(read_line());
for (var i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i]);
}
res = fun1(arr,p,x);
print(res);