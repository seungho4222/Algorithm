/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12954
 * 프로그래머스 lv1
 * x만큼 간격이 있는 n개의 숫자
 * @param {Number} x
 * @param {Number} n
 * @returns {Number[]}
 */

function solution(x, n) {
  return new Array(n).fill(x).map((v, i) => v * (i + 1));
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
