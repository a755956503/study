function getData(length) {
  var arr = []
  for (var i = 0; i < length; i++) {
    arr.push(parseInt(Math.random() * 100000));
  }
  return arr;
}
function quickSort(array){
  function sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor((arr.length - 1) / 2);
    const midd = arr.splice(mid, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < midd) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...sort(left), midd, ...sort(right)];
  }
  return sort(array);
}
function quickSort1(array){
  function sort(prev, numsize){
    var nonius = prev;
    var j = numsize -1;
    var flag = array[prev];
    if ((numsize - prev) > 1) {
      while(nonius < j){
        for(; nonius < j; j--){
          if (array[j] < flag) {
            array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
            break;
          };
        }
        for( ; nonius < j; nonius++){
          if (array[nonius] > flag){
            array[j--] = array[nonius];
            break;
          }
        }
      }
      array[nonius] = flag;
      sort(0, nonius);
      sort(nonius + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}
function guibingSort(arrIn) {
  function merge(left, right) {
    var result = [];
    while(left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    // return result.concat(left).concat(right);
    return [...result, ...left, ...right];
  }
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(arrIn);
}
function guibingSort1(arrIn) {
  function merge(left, right) {
    var tmp = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0])
        tmp.push(left.shift());
      else
        tmp.push(right.shift());
    }
  
    return tmp.concat(left, right);
  }
  
  function mergeSort(a) {
    if (a.length === 1) 
      return a;
  
    var mid = ~~(a.length / 2)
      , left = a.slice(0, mid)
      , right = a.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(arrIn);
}