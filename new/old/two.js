var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line){
  function count(max, line, first) {
    if (first == undefined) {
      first = Number(line.shift());
      max = 1;
    }
    if (line.length > 0) {
      if (first == line[0]) {
        return max;
      } else {
        var two = Number(line.shift());
        max++;
        return count(max, line, two);
      }
    }
    return max;
  };
  var lines = line.split('');
  max = 0;
  while (lines.length > 0) {
    var m =count(0, lines);
    max = max > m ? max : m;
  }
  console.log(max);
});