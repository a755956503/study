function quickSortSimple(array){
  function sort(prev, numsize) {
    let start = prev;
    let flag = array[prev];
    let end = numsize - 1;
    if (end > start) { // 至少要有两个数
      while(start < end) { // 终止条件： start = end
        for (;start < end; end--) {
          if (array[end] < flag) {
            array[start] = array[end];
            // start++
            break;
          }
        }
        for(;start < end; start++) {
          if (array[start] > flag) {
            array[end] = array[start]
            // end--;
            break;
          }
        }
      }
      sort(prev, start);
      sort(start, numsize)
    }
  }
  sort(prev, array.length);
  return array; // 会改变传入的数组，如果不想改变，就先复制一份。
}