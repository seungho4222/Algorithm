/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12914
 * 프로그래머스 lv2
 * 멀리 뛰기
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  const dp = Array(n - 1).fill(0);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n - 1];
}

console.log(solution(4));
console.log(solution(2000));
