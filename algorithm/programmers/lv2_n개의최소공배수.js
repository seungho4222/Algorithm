/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12953
 * 프로그래머스 lv2
 * N개의 최소공배수
 * @param {Number[]} arr
 * @returns {Number}
 */

function solution(arr) {
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  return arr.reduce((acc, cur) => lcm(acc, cur));
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
