/** 装饰器
 * 目前最新的chrome也不支持
 */
function deco(target) {

}

function deepDeco(name) {
  return deco;
}
function decofun(id) {
  console.log('out', id);
  return function (target, name, descriptor) {
    descriptor.value = function(...args) {
      console.log('in', id);
      descriptor.value.apply(this, args);
    }
    return descriptor;
  }
}

class A {
  constructor() {

  }
  @decofun(1)
  @decofun(2)
  func() {

  }
}

let funa =  new A();
funa.func();


/** 修饰箭头函数
 * 
 * 
 */
method = descriptor.initializer.call(this);
descriptor.initializer = function() {
  let that = this;
  return  function (...arg) {
    /// 一些通用处理代码
    
    // return method(...arg);
    let func = method.apply(that, arg);
    return func(...arg);
  };
}

// 下面这几种有可能也能搞出来

// method = descriptor.initializer.call(this);
// return {
//   enumerable: false,
//   configurable: true,
//   get: function (...arg) {
//     return method.apply(this, arg);
//   }
// }

// descriptor.value = function (...arg) {
//   return (method.call(this)).call(this, ...arg);
//     method = method.call(this);
//     return method()
//     // return target[name](...arg);
// };
// descriptor.initializer = undefined;