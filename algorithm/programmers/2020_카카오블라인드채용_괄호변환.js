/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/60058
 * 프로그래머스 lv2 - 2020 KAKAO BLIND RECRUITMENT
 * 괄호 변환
 * @param {String} p
 * @returns {String}
 */

function solution(p) {
  const transform = (s) => {
    if (!s) return "";

    let [u, v] = ["", ""];
    let isFair = 0;
    const isCorrect = s[0] === "(";

    for (let i = 0; i < s.length; i++) {
      isFair += s[i] === "(" ? 1 : -1;

      if (!isFair) {
        u = s.slice(0, i + 1);
        v = s.slice(i + 1);
        break;
      }
    }

    v = transform(v);

    if (!isCorrect) {
      const temp = [...u.slice(1, u.length - 1)].map((v) => (v === "(" ? ")" : "(")).join("");

      return "(" + v + ")" + temp;
    } else return u + v;
  };

  return transform(p);
}

console.log(solution("(()())()", "(()())()"));
console.log(solution(")(", "()"));
console.log(solution("()))((()", "()(())()"));
