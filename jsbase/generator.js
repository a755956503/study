function* genfunc() {
  const a = 1;
  const p1 = yield new Promise((resolve, reject) => {
    console.log(11);
    setTimeout(() =>{
      resolve(1);
    }, 10)
  });
}
function a() {
  const gen = genfunc();
  gen.next().value.then((data) => {
    console.log(data);
  });
  console.log('generator')
}
// a();
// 11 async 1
const p1 = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve(1);
  }, 1000)
});
async function func() {
  const pro = await p1.then((data) => {console.log(data);return 2});
  console.log('async', pro);
  console.log('async 11');
}
func();
console.log('async out 1');
