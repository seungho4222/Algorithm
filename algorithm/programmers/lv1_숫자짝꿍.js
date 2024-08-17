/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128
 * 프로그래머스 lv1
 * 숫자 짝꿍
 * @param {String} X
 * @param {String} Y
 * @returns {String}
 */

function solution(X, Y) {
  const map = new Map();
  const pair = [];

  Array.from(X).forEach((x) => {
    map.set(x, map.has(x) ? map.get(x) + 1 : 1);
  });

  Array.from(Y).forEach((y) => {
    if (map.get(y)) {
      pair.push(y);
      map.set(y, map.get(y) - 1);
    }
  });

  pair.sort((a, b) => +b - +a);

  if (pair.length === 0) return "-1";
  if (pair[0] === "0") return "0";
  return pair.join("");
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));
