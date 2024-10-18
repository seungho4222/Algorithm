/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12915
 * 프로그래머스 lv1
 * 문자열 내 마음대로 정렬하기
 * @param {String[]} strings
 * @param {Number} n
 * @returns {String[]}
 */

function solution(strings, n) {
  return strings.sort((a, b) => a[n].localeCompare(b[n]) || a.localeCompare(b));
}

// other

function solution(strings, n) {
  return strings
    .map((a) => [...a][n] + a)
    .sort()
    .map((a) => a.substring(1));
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
