/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92335
 * 2022 KAKAO BLIND RECRUITMENT
 * k진수에서 소수 개수 구하기
 * @param {Number} n
 * @param {Number} k
 * @returns {Number}
 */

function solution(n, k) {
  let answer = 0;

  const isPrime = (num) => {
    if (!num || num === 1) return false;
    for (let i = 2; i <= num ** 0.5; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const convertedNum = n.toString(k);
  const arr = convertedNum.split("0");

  for (let num of arr) {
    if (isPrime(+num)) answer++;
  }

  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
