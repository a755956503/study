var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});
rl.on('line', function(line){ // javascript每行数据的回调接口
  var n = line.trim();
  var arr = n.split('');
  var ans = 0;
  var ss = 0;
  var s = 0;
  for (var i = 0;i < arr.length; i ++) {
    if (i === arr.length - 1) {
      if (arr[i] !== arr[i-1]) {
        ans++;
        ss += s + 1;
      } else {
        ss += s + 1;
      }
    } else if (!arr[i-1] || arr[i] !== arr[i-1]) {
      ans++;
      ss += s;
      s = 1;
    } else {
      s++;
    }
  }
  ans = Math.round(parseFloat(ss / ans)*100)/100;
  ans = String(ans);
  var point = ans.split(".");
  if(point.length === 1){
    ans += '.00';
    return ans;
  }
  if(point.length>1 && point[1].length<2) {
    ans = ans + "0";
  }
  console.log(ans);
});
function a(line) {
  var n = line.trim();
  var arr = n.split('');
  var ans = 0;
  var ss = 0;
  var s = 0;
  for (var i = 0;i < arr.length; i ++) {
    if (i === arr.length - 1) {
      if (arr[i] !== arr[i-1]) {
        ans++;
        ss += s + 1;
      } else {
        ss += s + 1;
      }
    } else if (!arr[i-1] || arr[i] !== arr[i-1]) {
      ans++;
      ss += s;
      s = 1;
    } else {
      s++;
    }
  }
  ans = Math.round(parseFloat(ss / ans)*100)/100;
  ans = String(ans);
  var point = ans.split(".");
  if(point.length === 1){
    ans += '.00';
    return ans;
  }
  if(point.length>1 && point[1].length<2) {
    ans = ans + "0";
  }
  console.log(ans);
}