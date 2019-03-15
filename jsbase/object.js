/** constructor
 * 
 */
// function Func() {
//   this.a = 1;
// }
// const obj = new Func();
// console.log(obj.constructor === Func);
// console.log(Func.constructor === Function);
// Func.prototype = {};
// console.log(obj.constructor === Func);
// const obj2 = new Func();
// console.log(obj2.constructor === Func);

Object.defineProperty(a, 'da', {
  configurable: false,
  enumerable: false,
  writable: true,
  value: '11',
});