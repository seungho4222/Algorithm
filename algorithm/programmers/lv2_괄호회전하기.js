/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * 프로그래머스 lv2 - 월간 코드 챌린지 시즌2
 * 괄호 회전하기
 * @param {String} s
 * @returns {Number}
 */

function solution(s) {
  const map = { ")": "(", "}": "{", "]": "[" };
  let cnt = 0;

  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    const arr = s.substring(i).concat(s.substring(0, i));
    let check = true;

    for (let str of arr) {
      if (["(", "{", "["].includes(str)) {
        stack.push(str);
      } else {
        if (stack && stack[stack.length - 1] === map[str]) {
          stack.pop();
        } else {
          check = false;
          break;
        }
      }
    }

    if (check && !stack.length) cnt++;
  }

  return cnt;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("[]][]["));
