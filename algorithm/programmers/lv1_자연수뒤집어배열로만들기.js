/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * 프로그래머스 lv1
 * 자연수 뒤집어 배열로 만들기
 * @param {Number} n
 * @returns {Number[]}
 */

// 문자열

function solution(n) {
  return [...n.toString()].reverse().map((v) => +v);
}

// other - 숫자

function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

console.log(solution(12345));
