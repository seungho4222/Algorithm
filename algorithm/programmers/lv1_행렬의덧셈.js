/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 프로그래머스 lv1
 * 행렬의 덧셈
 * @param {Number[][]} arr1
 * @param {Number[][]} arr2
 * @returns {Number[][]}
 */

function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((col, j) => col + arr2[i][j]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
