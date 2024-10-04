/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 프로그래머스 lv1
 * 최대공약수와 최소공배수
 * @param {Number} n
 * @param {Number} m
 * @returns {Number}
 */

function solution(n, m) {
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  return [gcd(n, m), (n * m) / gcd(n, m)];
}

// other
/**
 * var는 function scope이므로 블록밖에서 접근 가능
 * for문 (초기문; 조건문; 증감문)
 */

function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
