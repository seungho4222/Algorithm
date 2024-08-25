/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12944
 * 프로그래머스 lv1
 * 평균 구하기
 * @param {Number[]} arr
 * @returns {Number}
 */

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
