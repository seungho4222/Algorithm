/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * 프로그래머스 lv2 - 2017 팁스타운
 * 짝지어 제거하기
 * @param {String} s
 * @returns {Number} 0 or 1
 */

function solution(s) {
  const stack = [];

  for (let a of s) {
    if (stack[stack.length - 1] === a) {
      stack.pop();
    } else {
      stack.push(a);
    }
  }

  return stack.length ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
