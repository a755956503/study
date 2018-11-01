var arr = [[a,a,a]]
for (var i = 0; i < arr.length; i++) {
  var arrm = arr[i];
  if (arrm.length > w) {
    console.log('too long');
  } else {
    var len = arr.length;
    var ans =parseInt((w - len) * 5) / 10;
    console.log(ans);
  }
}