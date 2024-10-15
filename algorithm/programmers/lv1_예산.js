/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 프로그래머싀 lv1 - Summer/Winter Coding(~2018)
 * 예산
 * @param {Number[]} d
 * @param {Number} budget
 * @returns {Number}
 */

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let idx = 0;

  while (idx < d.length && sum + d[idx] <= budget) {
    sum += d[idx++];
  }

  return idx;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
