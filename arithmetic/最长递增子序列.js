// [2, 1, 3, 4, 7, 5, 6]
//  10, 9,2, 5, 3, 7, 101, 18] 4
function lls(nums) {
  if (nums.length === 1) {
    return 1;
  }
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[nums.length - 1];
}