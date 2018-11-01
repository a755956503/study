function fun (arr,b) {
  var m = parseInt(0 + arr.length / 2);
  while(m >= 0 || m <= arr.length) {
    if (b > arr[m]) {
      m = parseInt((m + arr.length) / 2);
    } else if (b < arr[m]) {
      m = parseInt((m + 0) / 2);
    } else {
      return m;
    }
  }
}
fun(1,6);