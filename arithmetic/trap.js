/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let allCount = 0;
    let maxHeight = 0;
    let count = 0;
    let hasHeight = false;
    height.forEach((item) => {
      console.log(count);
      if (hasHeight) {
        if (item >= maxHeight) {
          maxHeight = item;
          hasHeight = false;
          allCount += count;
          count = 0;
        } else {
          count += maxHeight - item;
        }
      }
      if (item > maxHeight) {
        maxHeight = item;
      } else {
        hasHeight = true
        count = maxHeight - item;
      }
    });
    return allCount + count;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))