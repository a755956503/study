function func(arr) {
  var out = [];
  var arrOut = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (!out[num]) {
      out[num] = 1;
    }
  }
  for (var i = 0; i < out.length; i++) {
    if (out[i] === 1) {
      arrOut.push(i);
    }
  }
  return arrOut;
}

function sort(arr) {
  let arrOut;
  for ()
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
    ans = func(arr);
    for (var i = 0; i < ans.length; i++) {
      console.log(ans[i]);
    }
    n = -1;
    cur_line = 0;
    arr = [];
  }
});