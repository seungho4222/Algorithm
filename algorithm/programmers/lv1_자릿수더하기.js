/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12931
 * 프로그래머스 lv1
 * 자릿수 더하기
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  return [...String(n)].reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution(123));
console.log(solution(987));
