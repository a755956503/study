var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var arr = -1;
var arrm = [];
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
  if (n < 0) { // 测试用例第一行读取n
    var str = line.split(' ');
    n = parseInt(str[1].trim())
  } else if (arr === -1){
    var str = line.split(' ');
    arr = [];
    for(var i = 0;i< str.length; i++) {
      arr.push(Number(str[i]));
    }
  } else {
    var x = Number(line.trim());
    arrm.push(x);
    cur_line ++;
  }
  if (cur_line === n) {
    ans = 0;
    for (var i = 0; i < arrm.length; i ++) {
      var cv = arrm[i];
      // var newArr = arr.slice(0);
      // var index = match(newArr,cv);
      var index = match(arr,cv);
      if (index) {
        ans++;
      }
    }
    function buildHeap(elements){
      function headAdjust(elements, pos, len){
        //将当前节点值进行保存
        var swap = elements[pos];

        //定位到当前节点的左边的子节点
        var child = pos * 2 + 1;

        //递归，直至没有子节点为止
        while(child < len){
          if(child + 1 < len && elements[child] < elements[child + 1]){
            child += 1;
          }

          //比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位
          //于子节点上
          if(elements[pos] < elements[child]){
            elements[pos] = elements[child];
            pos = child;
            child = pos * 2 + 1;
          }
          else{
            break;
          }

          elements[pos] = swap;
        }
      }
      for(var i=elements.length/2; i>=0; i--){
        headAdjust(elements, i, elements.length);
      }
    }

    function sort(elements){
      buildHeap(elements);
      for(var i=elements.length-1; i>0; i--){
        //堆顶永远是最大元素，故，将堆顶和尾部元素交换，将
        //最大元素保存于尾部，并且不参与后面的调整
        var swap = elements[i];
        elements[i] = elements[0];
        elements[0] = swap;

        //进行调整，将最大）元素调整至堆顶
        headAdjust(elements, 0, i);
      }
    }
    function match(maps, num) {
      var index = num;
      maps.sort(function(a,b){
        return a - b;
      })
      for (var i = 0; i < maps.length; i++) {
        if ( index < maps[i]) {
          return false;
        } else if(index === maps[i]) {
          return true;
        } else {
          index = index - maps[i];
        }
      }
    }
    // 输出结果
    console.log(ans);
    // 重新初始化相关变量
    n = -1;
    ans = 0;
    arr = -1;
    arrm = [];
    cur_line = 0;
  }
});
