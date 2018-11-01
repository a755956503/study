/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
var a = ['ykit-config-yo',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit-config-yo',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit-config-yo',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit-config-yo',
  'mykit',
  'fekit',
  'ykit-config-fekit',
  '-ykit-config-fekit',
  'ykit',
  'ykit'];
var k = 'Yykit';
function fun(arr,key) {
  var arr1 = [];
  var arr2 = [];
  // var arr0 = [];
  var reg = new RegExp(key,'i');
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].search(reg);
    if (index === 0) {
      if (arr[i].search(key) !== -1) {
        arr1.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    } else if (index > 0) {
      arr2.push(arr[i]);
    }
  }
  arr1.sort();
  arr2.sort();
  arr1 = arr1.concat(arr2);
  if (arr1.length > 20) {
    arr1 = arr1.slice(0,20);
  }
  return arr1;
}
/******************************结束写代码******************************/


var res;
var arr = [];
var n = Number(read_line());
for (var i = 0; i < n; i++) {
  arr[i] = read_line().trim();
}
var key = read_line().trim();
res = fun(arr,key);
if (res.length === 0) {
  print('error')
} else {
  for (var i = 0; i < res.length; i++) {
    print(res[i]);
  }
}
