/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68935
 * 월간 코드 챌린지 시즌1
 * 3진법 뒤집기
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

console.log(solution(45));
console.log(solution(125));
