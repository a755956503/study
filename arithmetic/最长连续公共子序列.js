// leetcode: 718 Maximum Length of Repeated Subarray
// 解题：牛客网 https://www.nowcoder.com/questionTerminal/02e7cc263f8a49e8b1e1dc9c116f7602
// https://www.nowcoder.com/practice/02e7cc263f8a49e8b1e1dc9c116f7602?tpId=49&&tqId=29349&rp=2&ru=/activity/oj&qru=/ta/2016test/question-ranking
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var max = 0;
    var arr = [];
    arr[0] = [];
    // for (var i = 1; i <= A.length; i++) {
    //   arr[i] = [];
    //   arr[i][0] = A[i - 1];
    // }
    // for (i = 1; i <= B.length; i++) {
    //   arr[0][i] = B[i - 1];
    // }
    for (i = 0; i < A.length; i++) {
      arr[i] = [];
      for (var j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
          let mid;
          if (i > 0 && j > 0) {
            let left = arr[i-1][j-1];
            if (!left) {
              mid = 1;
            } else {
              mid = left + 1;
            }
          } else {
            mid = 1;
          }
          arr[i][j] = mid;
          max = max > mid ? max : mid;
        }
      }
    }
    return max;
};
