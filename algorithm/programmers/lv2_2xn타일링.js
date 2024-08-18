/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12900
 * 프로그래머스 lv2
 * 2 x n 타일링
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
  }

  return dp[n];
}

console.log(solution(4));
console.log(solution(60000));
