// leetcode: 1143
// 'abcde' 'ace'
// longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq')
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = [];
  for (let i = 0; i <= text1.length; i++) {
    dp[i] = [];
  }
  function lcs(m, n) {
    // 缓存数据，实现时间空间复杂度mn
    if (dp[m][n] !== undefined) {
      return dp[m][n];
    }
    if (m === 0 || n === 0) {
      dp[m][n] = 0;
    } else if ((text1[m] || text2[n]) && text1[m] === text2[n]) {
      dp[m][n] = lcs(m - 1, n - 1) + 1;
    } else {
      dp[m][n] = Math.max(lcs(m, n - 1), lcs(m - 1, n));
    }
    return dp[m][n];
  }
  let result =  lcs(text1.length, text2.length) || 0;
  return result;
};

// 递归写法,10来个字符串复杂度就爆炸
var longestCommonSubsequence1 = function(text1, text2) {
  let arr = [];
  for (let i of text1) {
    arr[i] = [];
  }
  function lcs(m, n) {
    if (m === -1 || n === -1) {
      return 0;
    } else if (text1[m] === text2[n]) {
      return lcs(m - 1, n - 1) + 1;
    }
    // 时间复杂度爆炸
    return Math.max(lcs(m, n - 1), lcs(m - 1, n));
  }
  return lcs(text1.length - 1, text2.length - 1);
};