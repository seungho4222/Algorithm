/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 * 프로그래머스 lv3
 * 정수 삼각형
 * @param {Number[][]} triangle
 * @returns {Number}
 */

function solution(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
