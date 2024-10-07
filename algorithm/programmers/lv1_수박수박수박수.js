/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12922
 * 프로그래머스 lv1
 * 수박수박수박수박수박수?
 * @param {Number} n
 * @returns {String}
 */

function solution(n) {
  const quotient = Math.floor(n / 2);
  const remainder = n % 2 ? "수" : "";
  return "수박".repeat(quotient) + remainder;
}

console.log(solution(3));
console.log(solution(4));
