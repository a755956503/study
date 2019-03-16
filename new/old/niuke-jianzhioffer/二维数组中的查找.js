function Find(target, array)
{
    // write code here
  for(var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var arr = array[i];
      for (var j = 0; j < arr.length; j++) {
        var data = arr[j];
        if (target === data) {
          return true;
        }
      }
    }
  }
  return false;
    
}
module.exports = {
    Find : Find
}
// var readline = require('readline');
// var rl = readline.createInterface({
//   input:process.stdin,
//   output: process.stdout,
//   terminal: false,
// });
// // var n = -1;
// var ans = 0;
// rl.on('line', function(line) {
//   var target = line.split(' ')
//   ans = Find()
// });