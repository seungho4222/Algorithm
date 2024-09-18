/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 프로그래머스 lv1
 * 이상한 문자 만들기
 * @param {String} s
 * @returns {String}
 */

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      [...word]
        .map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("try hello world"));
