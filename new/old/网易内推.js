function print(a) {
  console.log(a);
}
var lines = 'aabb';
var line = lines.split('');
var lineType = [];
line.forEach(function(cv){
  var type = lineType.indexOf(cv);
  if (type == -1) {
    lineType.push(cv);
  }
});
if(line.length > 50 || line.length == 0) {
  print(0);
}else if(lineType.length == 2) {
  print(2);
} else if(lineType.length ==1 ) {
  print(1);
}else {
  print(0);
};