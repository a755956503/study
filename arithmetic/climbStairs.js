/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // fi = x
  // fi+1 = fi-1 + fi-2
  // f1 1
  // f2 1,1 2
  // f3 1,1,1 2,1 1,2
  // f4 1,1,1,1 2,1,1 1,2,1 1,1,2, 2,2
  const arr = [0, 1, 2];
  function fn(i) {
    if (arr[i]) {
      return arr[i];
    }
    const last = fn(i - 1);
    const last2 = fn(i - 2);

    const max = last + last2;
    arr[i] = max;
    return max;
  }
  const result = fn(n);

  console.log(arr);
  return result;
};

console.log(climbStairs(4));