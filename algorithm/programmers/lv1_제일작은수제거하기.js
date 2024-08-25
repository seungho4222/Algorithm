/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12935
 * 프로그래머스 lv1
 * 제일 작은 수 제거하기
 * @param {Number[]} arr
 * @returns {Numberp[]}
 */

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return !arr.length ? [-1] : arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
