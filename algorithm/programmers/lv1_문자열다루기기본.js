/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12918
 * 프로그래머스 lv1
 * 문자열 다루기 기본
 * @param {String} s
 * @returns {Boolean}
 */

function solution(s) {
  const n = s.length;

  if (n !== 4 && n !== 6) return false;

  for (let i = 0; i < n; i++) {
    if (isNaN(s[i])) return false;
  }

  return true;
}

// other

function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}

console.log(solution("a234"));
console.log(solution("1234"));
