while((a=read_line())!=null){
  print(a);
}
while((a=readInt())!=null && (b=readInt())!=null){
  var c = solveMeFirst(a, b);
  print(c);
}

// node
var cmd = require('node-stdio')
while((a=cmd.readInt())!=null && (b=cmd.readInt())!=null){
  var c = solveMeFirst(a, b);
  cmd.print(c);
}
// **************]

var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin, output: process.stdout, prompt:''});
rl.prompt();

var solveMeFirst = (a, b) => a+b;

rl.on('line', function (data) {
  let arr = data.split(' ');
  if (arr && arr.length==2) {
    let c = solveMeFirst(+arr[0], +arr[1]);
    process.stdout.write('' + c + '\n');
  }
});