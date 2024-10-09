/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12985
 * 프로그래머스 lv2 - 2017 팁스타운
 * 예상 대진표
 * @param {Number} n
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

// 이진탐색

function solution(n, a, b) {
  let answer = 0;

  while (n !== 1) {
    n /= 2;
    answer++;
  }

  if (a > b) [a, b] = [b, a];

  let [l, r] = [1, Math.pow(2, answer)];

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (a <= m && b > m) return answer;

    if (a > m) l = m + 1;
    else r = m;
    answer--;
  }
}

console.log(solution(8, 4, 7));
