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


// jicheng
// one: 缺点：能把Father.prototype上的方法传递给Child.prototype，通过__proto__。
// 但是原本挂在Father上的属性也挂在了Child.prototype上。
function Father(params) {
  this.a = 1;
  this.params = params;
}
Father.prototype.funa = function () {
  console.log(a);
}
// function Child(params) {
//   Father.apply(this, params);
// }
// Child.prototype = new Father(); 
// console.log(new Child)

//  解决： 手动复制Father.prototype上的属性
function Child(params) {
  Father.apply(this, params);
  Object.keys(Father.prototype).forEach((key) => {
    arguments.callee.prototype[key] = Father.prototype[key]
  })
}
// 或者
// (function(){
//   // 创建一个没有实例方法的类, 即没有this里的属性。
//   var Super = function(){};
//   Super.prototype = Father.prototype;
//   //将实例作为子类的原型
//   Child.prototype = new Super();
// })();

console.log(new Child)