/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12929
 * 프로그래머스 lv4
 * 올바른 괄호의 갯수
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  /**
   * '(' 여는 괄호로 항상 시작
   * 시작 괄호 안에 포함되는 괄호쌍 구분하여 계산
   * e.g. n = 4
   * 0 쌍 * 3 쌍 -> ()...
   * 1 쌍 * 2 쌍 -> (())...
   * 2 쌍 * 1 쌍 -> ((()))... or (()())...
   * 3 쌍 * 0 쌍 -> (3쌍조합)
   *
   * dp = [1, 1] 에서 시작
   */
  const dp = new Array(n + 1).fill(0).fill(1, 0, 2);

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp.at(-1);
}

for (let k = 2; k < 20; k++) {
  console.log(String(k).padStart(2, " "), ":", solution(k));
}
