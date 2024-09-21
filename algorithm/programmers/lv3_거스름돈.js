/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12907
 * 프로그래머스 lv3
 * 거스름돈
 * @param {Number} n
 * @param {Number[]} money
 * @returns {Number}
 */

function solution(n, money) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let coin of money) {  // 화폐단위
    for (let target = 1; target < n + 1; target++) {  // 목표 금액
      target >= coin ? (dp[target] += dp[target - coin]) : null;
    }
  }

  return dp[n];
}

console.log(solution(5, [1, 2, 5]));
/**
  1 [ 1, 1, 1, 1, 1, 1 ]
  2 [ 1, 1, 2, 2, 3, 3 ]
  5 [ 1, 1, 2, 2, 3, 4 ]
 */
console.log(solution(10, [2, 3, 4, 5]));
/**
  2 [ 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
  3 [ 1, 0, 1, 1, 1, 1, 2, 1, 2, 2, 2]
  4 [ 1, 0, 1, 1, 2, 1, 3, 2, 4, 3, 5]
  5 [ 1, 0, 1, 1, 2, 2, 3, 3, 5, 5, 7]
 */
