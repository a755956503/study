function func() {

}

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){
  var input = line.split('');
  var arr = [];
  var str = '';
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      str += input[i];
      if (i === input.length - 1) {
        arr.unshift(str);
        str = '';
      }
    } else if (str !== '') {
      arr.unshift(str);
      str = '';
    }
  }
  console.log(arr.join(' '));
});