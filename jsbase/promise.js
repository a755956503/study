/** all
 * 
 */
// const p1 = new Promise((resolve, reject) => {
//   console.log(11);
//   setTimeout(() =>{
//     resolve(1);
//   }, 10)
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     resolve(2);
//   }, 20)
// });
// const data = Promise.all([p1, p2]);
// console.log(data);
// Promise.all([
//   p1, p2
// ]).then((resolve) => {
//   console.log(resolve);
// })

// then传入参数设置
// const data  = Promise.resolve(p1).then(() => 11);
// console.log(data);

// Promise.resolve(p1).then(p1).then(() => 111).then((data) => {
//   console.log(data);
// });

// Promise.resolve().then(() => {
//   new Promise((resolve, reject) => {
//     console.log(11);
//     setTimeout(() =>{
//       resolve(1);
//     }, 10)
//   });
// }).then((data) => {
//   console.log(data);
// });

/** promise包裹async */
const p1 = new Promise((resolve, reject) => {
  console.log(11);
  setTimeout(() =>{
    resolve(1);
  }, 10)
});
new Promise(async (resolve) => {
  const pro = await p1.then((data) => {
    console.log(data);
  })
  resolve(2);
}).then((data) => {
  console.log(data);
})