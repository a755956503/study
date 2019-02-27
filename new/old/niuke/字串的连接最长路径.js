function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j =  i; j > 0 ; j--) {
      if (arr[j] < arr[j - 1]) {
        var k = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = k;
      }
    }
  }
  return arr;
}

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;
var ans = 0;
var cur_line = 0;
var arr = [];
rl.on('line', function(line){
  if (n === -1) {
    n = parseInt(line, 10);
  } else {
    arr.push(line)
    cur_line++;
  }
  if (cur_line === n) {
    var arrOut = sort(arr);
    for (var i = 0; i < arrOut.length; i++) {
      console.log(arrOut[i]);
    }
    n = -1;
    cur_line = 0;
    arr = [];
  }
});