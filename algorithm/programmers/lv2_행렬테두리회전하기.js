/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77485
 * 프로그래머스 lv2 - 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
 * 행렬 테두리 회전하기
 * @param {Number} rows
 * @param {Number} columns
 * @param {Number[][]} queries
 * @returns {Number[]}
 */

function solution(rows, columns, queries) {
  var answer = [];
  // 행렬 생성
  const arr = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1)
  );

  // 쿼리 회전
  for (let [x1, y1, x2, y2] of queries) {
    let prev = arr[x1 - 1][y1 - 1];
    let min = prev;

    // 상단
    for (let col = y1; col < y2; col++) {
      [prev, arr[x1 - 1][col]] = [arr[x1 - 1][col], prev];
      min = Math.min(min, prev);
    }

    // 우측
    for (let row = x1; row < x2; row++) {
      [prev, arr[row][y2 - 1]] = [arr[row][y2 - 1], prev];
      min = Math.min(min, prev);
    }

    // 하단
    for (let col = y2 - 2; col >= y1 - 1; col--) {
      [prev, arr[x2 - 1][col]] = [arr[x2 - 1][col], prev];
      min = Math.min(min, prev);
    }

    // 좌측
    for (let row = x2 - 2; row >= x1 - 1; row--) {
      [prev, arr[row][y1 - 1]] = [arr[row][y1 - 1], prev];
      min = Math.min(min, prev);
    }

    answer.push(min);
  }

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
);
console.log(solution(100, 97, [[1, 1, 100, 97]]));
