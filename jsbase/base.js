// debounce
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
// throttle 这种第一次执行时再1s后，如果一开始也需要执行一次，需要改一下。
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
// 但是原本挂在Father上的属性也挂在了Child.prototype上。
// function Father(params) {
//   this.a = 1;
//   this.params = params;
// }
// Father.prototype.funa = function () {
//   console.log(a);
// }
// function Child(params) {
//   Father.apply(this, params);
// }
// Child.prototype = new Father(); 
// console.log(new Child)

//  解决： 手动复制Father.prototype上的属性
// function Child(params) {
//   Father.apply(this, params);
//   Object.keys(Father.prototype).forEach((key) => {
//     arguments.callee.prototype[key] = Father.prototype[key]
//   })
// }
// 或者
// (function(){
//   // 创建一个没有实例方法的类, 即没有this里的属性。
//   var Super = function(){};
//   Super.prototype = Father.prototype;
//   //将实例作为子类的原型
//   Child.prototype = new Super();
// })();

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

// Object.defineProperty(a, 'da', {
//   value: '11',
// });

Object.defineProperty(a, 'da', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: '11',
});
Object.defineProperty(a, 'da', {
  configurable: true,
  writable: true,
  value: '11',
});
// delete a.da;
// var da = Object.getOwnPropertyDescriptor(a, 'da');
// da.enumerable = true;


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