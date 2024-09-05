/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12934
 * 프로그래머스 lv1
 * 정수 제곱근 판별
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  return Math.sqrt(n) % 1 ? -1 : Math.pow(Math.sqrt(n) + 1, 2);
}

console.log(solution(121));
console.log(solution(3));
