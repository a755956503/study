function Func() {
  this.a = 1;
}
const obj = new Func();
console.log(obj.constructor === Func);
console.log(Func.constructor === Function);
Func.prototype = {};
console.log(obj.constructor === Func);
const obj2 = new Func();
console.log(obj2.constructor === Func);