
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
var lines = '111101111';
var line = lines.split('');
max = 0;
while (line.length > 0) {
  var m =count(0, line);
  max = max > m ? max : m;
}
console.log(max);

