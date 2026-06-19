/**
 * 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0]; 
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const dp = [nums[0], nums[1]];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = dp[i -1];
    for (let j = 0; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], dp[j] + nums[i]);
    }
    
  }
  return dp[nums.length - 1];
};
console.log(rob([2,1,1,2]))
// 2 1 3