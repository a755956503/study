function one(arr,arrm) {
  var ans = 0;
  for (var i = 0; i < arrm.length; i++) {
    var cv = arrm[i];
    // var newArr = arr.slice(0);
    // var index = match(newArr,cv);
    var index = match(arr, cv);
    if (index) {
      ans++;
    }
  }

  function match(maps, num) {
    var index = num;
    maps.sort(function (a, b) {
      return a - b;
    })
    for (var i = 0; i < maps.length; i++) {
      if (index < maps[i]) {
        return false;
      } else if (index = maps[i]) {
        return true;
      } else {
        index = index - maps[i];
      }
    }
    console.log(ans);
  }
}