// 最简单的装饰器
// this的指向会被改变。
// const _onload = window.onload || function(){};
// window.onload = function() {
//   _onload();// 这里面的this变成了window
// }
// A组件

function a() {
  console.log(this.da);
}
function before(){
  console.log(this.be);
}
function after() {
  console.log(this.af);
}
Function.prototype.after = function(fun) {
  const _self = this; // 原来的函数
  return function() {
    const result = _self.apply(this, arguments);
    fun.apply(this, arguments);
    return result;
  }
}
const obj = { da: 1, be: 2, af: 3};
obj.a = a.after(after);
obj.a();