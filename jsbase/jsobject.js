/** arguments
 * 
 */
// function a() {
//   console.log(arguments);
//   console.log(...arguments);
//   b(...arguments);
// }
// function b() {
//   console.log(arguments);
//   console.log(...arguments);
// }
// // a(...{a:1,b:2});
// a(...[1,2])

/** setProperty */
/** proxy */

// let a = {
//   funca() {
//     console.log('a');
//   }
// };
// let b = {
//   funcb() {
//     console.log('b');
//   }
// }
// a = new Proxy(a, {
//   get(target, key) {
//     if (key in target) {
//       console.log('a.func');
//       return target[key];
//     } else {
//       console.log('b.func');
//       return b[key];
//     }
//   }
// })


//  原型，原型链
// function funa() {
//   this.a = 1;
// }
// funa.prototype.b = 2;
// var a = new funa();


// let arr = [];
// for (key in a) {
//   arr.push(key);
// }a
// arr = Object.keys(a);
// console.log(arr);

// 继承
function SuperType(){
  this.colors = [ 'red', 'blue'];
};
SuperType.prototype.funca = function(){}

function SubType(){
}

SubType.prototype = new SuperType();

a = new SubType();
a.colors.push('green');
b = new SubType();
