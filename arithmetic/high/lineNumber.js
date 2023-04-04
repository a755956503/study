// 路径数量问题，CC88： 不同路径的数目(一)
// 一个机器人在m×n大小的地图的左上角（起点）。
// 机器人每次可以向下或向右移动。机器人要到达地图的右下角（终点）。
// 可以有多少种不同的路径从起点走到终点？
/**
  * 
  * @param m int整型 
  * @param n int整型 
  * @return int整型
  */
function uniquePaths( m ,  n ) {
  // write code here
  const v = [];
  // for (let i = 0; i < m; i++) {
  //   v[i] = [];
  //   for (let j = 0; j < n; j++) {
  //     v[i][j] = -1;
  //   }
  // }
  v[0][0] = 1;
  function step(i, j) {
    if (i === 0 || j === 0) {
      v[i][j] = 1;
    } else {
      v[i][j] = step(i - 1, j) + step(i, j - 1);
    }
    return v[i][j];
  }
  step(m - 1, n - 1);
  console.log(v);
  return v[m - 1][n -1]
}
function uniquePaths(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
}

// module.exports = {
//   uniquePaths : uniquePaths
// };
// v[i, j] = v[i - 1, j] + 1 , v[i, j - 1] + 1
