// 私有变量方法
// 函数外不能访问函数内的变量和函数，箭头函数也是。
// 函数new出来的对象可以访问this上的变量
// this和prototype: this上的变量实例化都会创建一个新的变量，prototype上的都用的同一个，所以一个是静态一个不是静态
function privateFn() {
  var a = 1;
  function aa() {
    console.log('bibao aa')
  }
  this.thisa = function () {
    console.log('bibao aa')
  }
};
const privateObj = () => {
  var a = 1;
  function aa() {
    console.log('bibao aa')
  }
};
// privateFn.a   undefined

// *** 函数和闭包
// 模块模式： 返回一个对象，对象内的函数引用闭包属性
// 私有变量：返回一个构造函数，构造函数内的函数引用闭包属性