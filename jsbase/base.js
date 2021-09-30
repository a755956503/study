// 防抖 节流 继承 对象属性
// debounce 防抖
// const debounce = function(action, delay = 1000) {
//   let timer;
//   return function() {
//     let args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       action.apply(this, args);
//     }, delay);
//   }
// }
// throttle  节流 这种第一次执行时再1s后，如果一开始也需要执行一次，需要改一下。
// const throttle = function(action, delay = 1000) {
//   let timer = true;;
//   return function() {
//     let args = arguments;
//     if (!timer) {
//       return;
//     }
//     timer = false;
//     setTimeout(() => {
//       action.apply(this, args);
//       timer = true;
//     }, delay);
//   }
// }
// let obj = {
//   a: 1,
//   test() {
//     console.log(this.a);
//   }
// };
// // obj.test = debounce(obj.test);
// obj.test = throttle(obj.test);
// let interval = setInterval(() => {
//   obj.test();
// }, 500)
// setTimeout(() => {
//   clearInterval(interval);
// }, 3000)


// 继承
// one: 缺点：能把Father.prototype上的方法传递给Child.prototype，通过__proto__。
// 但是原本挂在Father上的属性也挂在了Child.prototype上 =》 使用无影响，只是重复了一遍，首先调用的还是child自身的。
// function Father(params) {
//   this.a = 1;
//   this.params = params;
// }
// Father.prototype.funa = function () {
//   console.log(a);
// }
// function Child(params) {
//   Father.call(this, params);
// }
// Child.prototype = new Father(); 
// Child.prototype.constructor = Child;
// console.log(new Child)

//  解决： 手动复制Father.prototype上的属性 => 缺点：失去了Child和Fathre的关系 Child instanceof Father === false
// es就是用的这种方法
// Child.prototype = Object.create(Fathre && Father.prototype, {
//   constructor: {
//     value: subClass,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// });
// 简单点
// Child.prototype = Object.create(Father.prototype);
// Child.prototype.constructor = Child;
// 其他相似写法
// 直接复制：需要保证每一层都是直接复制的，如果中间某一层用了普通new的写法，Object.keys就获取不到了
// function Child(params) {
//   Father.apply(this, params);
//   Object.keys(Father.prototype).forEach((key) => {
//     arguments.callee.prototype[key] = Father.prototype[key]
//   })
// }
// 或者 => 
// (function(){
//   // 创建一个没有实例方法的类, 即没有this里的属性。
//   var Super = function(){};
//   Super.prototype = Father.prototype;
//   //将实例作为子类的原型
//   Child.prototype = new Super();
//   Child.prototype.constructor = Child
// })();
// 或者


// console.log(new Child)

/** 对象属性，本身属性，继承属性
 * 
 */
function classA () {
  this.ca = 1;
}
classA.prototype.cb = 2
var a = new classA();
a.a = 1;
var s = Symbol();
a[s] = 'aa';

// 不设的都是false，用xx.xx创建的，默认都是true
Object.defineProperty(a, 'da', {
  value: '11',
});

// Object.defineProperty(a, 'da', {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: '11',
// });
// Object.defineProperty(a, 'da', {
//   configurable: true,
//   writable: true,
//   value: '11',
// });
// delete a.da;
// getOwnPropertyDescriptor只能获取自身的
console.log('getOwnPropertyDescriptor自身a', Object.getOwnPropertyDescriptor(a, 'a'));
// getOwnPropertyDescriptor自身a {value: 1, writable: true, enumerable: true, configurable: true}
console.log('getOwnPropertyDescriptor自身da', Object.getOwnPropertyDescriptor(a, 'da'));
// getOwnPropertyDescriptor自身da {value: "11", writable: false, enumerable: false, configurable: false}
console.log('getOwnPropertyDescriptor继承cb', Object.getOwnPropertyDescriptor(a, 'cb'));
// getOwnPropertyDescriptor继承cb undefined
// da.enumerable = true;
// defineProperty
// writable: false: 重新赋值不会报错，只是没效果
// configurable: false 不可以被删除和重新定义特性, 删除没效果，执行返回false，重新定义报错  Cannot redefine property: da
// delete a.da;
// Object.defineProperty(a, 'da', {value: '33'})
// 常用的get,set就不说了 =》 当使用了getter或setter方法，不允许使用writable和value这两个属性(如果使用，会直接报错滴)

// 记忆 对象自身3+1+2 keys getOwnPropertyNames ownKeys  + getOwnPropertySymbols in .
console.log('Object.keys(a)', Object.keys(a)); // 对象自身的可枚举属性
console.log('Object.getOwnPropertyNames(a)', Object.getOwnPropertyNames(a)); // 对象自身的可枚举属性，不可枚举属性

console.log('a.ca, a.cb', a.ca, a.cb); // 和 in 一样
console.log('ca in a, cb in a', 'ca' in a, 'cb' in a); // 对象自身 和 继承 的可枚举属性

console.log('Object.getOwnPropertySymbols(a);', Object.getOwnPropertySymbols(a)); // 对象自身的Symbol属性
console.log('Reflect.ownKeys(a)', Reflect.ownKeys(a)); // 对象自身的可枚举属性，不可枚举属性，Symbo属性

var arr = [1];
console.log(Object.keys(arr));
console.log(arr.length);
console.log('length' in arr);
console.log(Object.getOwnPropertyNames(arr));

// length 和__proto__
// bject.getOwnPropertyDescriptor(xx, 'length')
// {value: 0, writable: true, enumerable: false, configurable: false}value: 0writable: trueenumerable: falseconfigurable: false__proto__: Object
// Object.getOwnPropertyDescriptor(xx, '__proto__')
// undefined