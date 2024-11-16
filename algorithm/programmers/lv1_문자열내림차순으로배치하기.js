/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12917
 * 프로그래머스 lv1
 * 문자열 내림차순으로 배치하기
 * @param {String} s
 * @returns {String}
 */

function solution(s) {
  return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
  // return [...s].sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
