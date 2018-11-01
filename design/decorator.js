// 最简单的装饰器
// this的指向会被改变。
const _onload = window.onload || function(){};
window.onload = function() {
  _onload();// 这里面的this变成了window
}
// A组件