



/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^
******************************开始写代码******************************/
function fun(str) {


}
/******************************结束写代码******************************/


var res;

var _str = read_line();

res = fun(_str);
res = res ? 1 : 0;
print(res);

/**
 * 
 */
NodeJS 语言
示例一（推荐）：
var cmd = require('node-stdio')
var a, b;
var solveMeFirst = (a,b) => a+b;
while((a=cmd.readInt())!=null && (b=cmd.readInt())!=null){
    let c = solveMeFirst(a, b);
    cmd.print(c);
}

示例二（nodejs自带stdio）：
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
var input = "";
var input_array = "";

//这里不灵活，需要全部读取数据后再处理，容易超内存。
process.stdin.on('data', function (data) {
    input += data;
});

var solveMeFirst = (a, b) => a+b;

process.stdin.on('end', function () {
    let arr = input.split("\n");
    for (var i=0; i<arr.length; i++) {
	    if (arr[i] != '') {
            input_array = arr[i].split(" ");
            
            let inline = 0;
            let res;
            let _a = parseInt(input_array[inline].trim(), 10);
            inline += 1;
        
            let _b = parseInt(input_array[inline].trim(), 10);
            inline += 1;
        
            res = solveMeFirst(_a, _b);
            process.stdout.write("" + res + "\n");
	    }
    }
});

示例三（nodejs自带readline）：
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