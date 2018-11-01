import { parse } from 'path';

/**
 * 1，2，5元硬币分别为a,b,c个，构成m元。
 */
var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on('line', function(line){
    var tokens = line.split(' ');
    var a = parse(tokens[0], 10);
    var b = parse(tokens[1], 10);
    var c = parse(tokens[2], 10);
    var m = parse(tokens[3], 10);

});