/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/147354
 * 프로그래머스 lv2
 * 테이블 해시 함수
 * @param {Number[][]} data
 * @param {Number} col
 * @param {Number} row_begin
 * @param {Number} row_end
 * @returns {Number}
 */

function solution(data, col, row_begin, row_end) {
  var answer = 0;

  data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

  for (let i = row_begin - 1; i < row_end; i++) {
    const modSum = data[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0);
    answer = answer ^ modSum;
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
