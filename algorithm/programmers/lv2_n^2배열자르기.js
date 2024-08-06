/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87390
 * 프로그래머스 lv2
 * n^2 배열 자르기
 * @param {Number} n
 * @param {Number} left
 * @param {Number} right
 * @returns {Number[]}
 */

function solution(n, left, right) {
  var answer = [];

  let row = Math.floor(left / n) + 1;
  let col = (left % n) + 1;

  while (left++ <= right) {
    const num = row >= col ? row : col;
    answer.push(num);
    if (++col > n) {
      col = 1;
      row++;
    }
  }

  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));

// other

function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
