var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  //                             var n = line.trim();
  //                             var data = n.split(',');
  // var result = [data[0]];
  // for(var i=1;i<data.length;i++){
  //   var repeat = false;
  //   for(var j=0;j<result.length;j++){
  //     if(data[i] === result[j]){
  //       repeat = true;
  //       break;
  //     }
  //   }
  //   if(!repeat){
  //     result.push(data[i]);
  //   }
  // }
  // console.log(result);
  var n = line.trim();
  var arr = n.split(',');
  var res = [];
  var jsonString = {};
  var jsonOther = {};
  for(var i = 0; i < arr.length; i++){
    if (arr[i] instanceof Object){
      res.push(arr[i]);
    }else if(!jsonString.hasOwnProperty(arr[i]) && typeof arr[i] === 'string'){
      res.push(arr[i]);
      jsonString[arr[i]] = 1;
    } else if(!jsonOther[arr[i]] && typeof arr[i] !== 'string') {
      res.push(arr[i]);
      jsonOther[arr[i]] = 1;
    }
  }
  console.log(res.join(','));
});