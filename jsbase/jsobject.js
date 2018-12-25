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

let a = {
  funca() {
    console.log('a');
  }
};
let b = {
  funcb() {
    console.log('b');
  }
}
a = new Proxy(a, {
  get(target, key) {
    if (key in target) {
      console.log('a.func');
      return target[key];
    } else {
      console.log('b.func');
      return b[key];
    }
  }
})