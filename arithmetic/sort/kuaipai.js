function getData(length) {
  var arr = []
  for (var i = 0; i < length; i++) {
    arr.push(parseInt(Math.random() * 100000));
  }
  return arr;
}
/** 快排
 * 快排一般认为是不稳定的，比如 2 4 1 3 1 第一轮就把最后的1换到前面了
 * 但是每次都新建两个数组，不在原数组里面交换就是稳定的，
 * 但这种方式空间复杂度比较大。
 */
// 不要用这种方法
function quickSort(array){
  function sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor((arr.length - 1) / 2);
    const midd = arr.splice(mid, 1)[0];
    const left = [];
    const right = []; // 这种方式会创建很多数组，占据大量内存
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
//两头并进，出现交换情况就换一边，这样很巧妙，但是看起来不容易看懂
function quickSort1(array){
  function sort(prev, numsize){
    var nonius = prev;
    var j = numsize -1;
    var flag = array[prev]; // 这里是以第一个数的大小为基准，不是中间那个
    if ((numsize - prev) > 1) {
      while(nonius < j){ // 从后往前，如果找到比基准小的数，就从前往后找一个比基准大的数，两个相互替换。
        for(; nonius < j; j--){ // 复杂的原因是没有创建中间变量转换，而是用array[nonius]这个值。
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
function quickSort2(array){
  function sort(prev, numsize){
    var nonius = prev + 1;
    var j = numsize -1;
    var flag = array[prev];
    if (numsize - 1 > prev) {
      while(nonius <= j) {
        if (array[nonius] > flag) {
          let midNum = array[nonius];
          array[nonius] = array[j];
          array[j] = midNum;
          j--;
        } else {
          array[nonius - 1] = array[nonius];
          nonius++;
        }
      }
      array[nonius - 1] = flag;
      sort(0, nonius - 1);
      sort(nonius, numsize);
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
function xuanzeSort(arrIn) {
  // 最后剩下那个一定是最小或最大值。
  for (var i = 0; i < arrIn.length -1 ; i++) {
    let k = i;
    for (var j = i + 1; j < arrIn.length; j++) {
      if (arrIn[j] < arrIn[k]) {
        k = j;
      }
    }
    var convert = arrIn[k];
    arrIn[k] = arrIn[i];
    arrIn[i] = convert;
  }
  return arrIn;
}
function charuSort(arrIn) {
  // 从第二个开始，因为第一个没有和它比较的，肯定是最小或最大
  for (var i = 1; i < arrIn.length ; i++) {
    let ak = arrIn[i];
    for (var j = i; j > 0 ; j--) {
      if (arrIn[j - 1] > ak) {
        arrIn[j] = arrIn[j - 1];
      } else {
        break;
      }
    }
    arrIn[j] = ak;
  }
  return arrIn;
}
function maopaoSort(arrIn) {
  // 最后剩下那个一定是最小或最大值。
  for (var i = 0; i < arrIn.length - 1 ; i++) {
    for (var j = arrIn.length; j > i ; j--) {
      if (arrIn[j] < arrIn[j - 1]) {
        var ak = arrIn[j];
        arrIn[j] = arrIn[j - 1];
        arrIn[j - 1] = ak;
      }
    }
  }
  return arrIn;
}
