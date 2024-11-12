/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12987
 * 프로그래머스 lv3 - Summer/Winter Coding(~2018)
 * 숫자 게임
 * @param {Number[]} A
 * @param {Number[]} B
 * @returns {Number}
 */

function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => a - b);
  let n = A.length;
  let [idxA, idxB] = [0, 0];

  while (idxA < n && idxB < n) {
    if (A[idxA] < B[idxB]) {
      answer++;
      idxA++;
    }
    idxB++;
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
