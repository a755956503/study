const catcht = () => {
  Promise.resolve(2).then((x)=>{console.log(x)})
  .then(()=>{throw new Error('myerror');})
  .catch((e)=>5)
  .then((x)=>{console.log(x)})
  .catch(e=>{console.log(e)})
}

const two = () => {
  setTimeout(function() {
    console.log(1)
  }, 0);
  new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<100000 ; i++ ) {
      i == 9999 && resolve();
    }
    console.log(3);
  }).then(function() {
    console.log(4);
  });
  console.log(5);
}
two();
// new Promise(function executor(resolve) {
  
//   for( var i=0 ; i<100000 ; i++ ) {
//     i == 9999 && console.log(2);
//   }
//   console.log(3);
// })