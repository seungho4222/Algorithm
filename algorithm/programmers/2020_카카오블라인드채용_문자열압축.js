/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/60057
 * 프로그래머스 lv2 - 2020 KAKAO BLIND RECRUITMENT
 * 문자열 압축
 * @param {String} s
 * @returns {Number}
 */

function solution(s) {
  if (s.length === 1) return 1;

  let answer = Infinity;

  for (let i = 1; i <= s.length / 2; i++) {
    let temp = "";
    let prev = "";
    let cnt = 1;

    for (let j = 0; j < s.length; j += i) {
      const string = s.substring(j, j + i);
      if (prev === string) {
        cnt++;
      } else {
        temp += cnt > 1 ? cnt + prev : prev;
        prev = string;
        cnt = 1;
      }
    }

    temp += cnt > 1 ? cnt + prev : prev;
    answer = Math.min(answer, temp.length);
  }

  return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
