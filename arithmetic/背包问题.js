/** 硬币问题
 * leetcode 322. Coin Change
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
};

/** 01背包
 * https://juejin.im/post/5b40c99ee51d45190b615f33
 */

function oneBag(c, w, v) {
  if (c.length !== w.length) return false;
  var f = [];
  for (var i = 0; i < c.length; i++) {
    f[i] = [];
    for (var j = 1; j <= v; j++) {
      f[i][j] = f[i-1][j]; 
      if (j > c[i]) {
        let value = f[i][j-c[i]] + w[i];
        f[i][j] = value > f[i][j] ? value : f[i][j];
      }
    }
  }
  return f[c.length - 1][v];
}

// 优化后的代码
void package01EX()
{
	for(int i = 1; i <= N; i++)
	{
		for (int j = M; j >= 1; j--)
		{
			if (j >= weight[i])
			{
				V[j] = max(V[j], V[j - weight[i]] + value[i]);
			}
		}
  }
}


 /** 完全背包问题
  *  https://segmentfault.com/a/1190000017578728  js
  * https://www.cnblogs.com/zpfbuaa/p/4966335.html
  * https://blog.csdn.net/qq_38984851/article/details/81133840
  * https://www.cnblogs.com/Kalix/p/7622102.html  重点
  * https://blog.csdn.net/m0_37907835/article/details/78991992
  * N种物品和一个容量为V的背包，每种物品都有无限件可用。
  * 第i种物品的费用是c[i]，价值是w[i]。
  * 求解将哪些物品装入背包可使这些物品的费用总和不超过背包容量，且价值总和最大。　　
  * 
  * 简单写法就是比01背包多一层循环
  * 可以转换成01背包，只用2层循环。
  */

function allBag(c, w, v) {
  if (c.length !== w.length) return false;
  var f = [];
  for (var i = 0; i < c.length; i++) {
    f[i] = [];
    for (var j = 0; j <= v; j++) {
      f[i][j] = f[i-1][j]; 
      for (var k = 1; c[i]* k <= v; k++) {
        let value = f[i][j-c[i]* k] + w[i] * k;
        f[i][j] = value > f[i][j] ? value : f[i][j];
      }
    }
  }
  return f[c.length - 1][v];
}