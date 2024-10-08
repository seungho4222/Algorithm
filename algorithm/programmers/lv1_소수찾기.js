/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * 프로그래머스 lv1
 * 소수 찾기
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  const isPrime = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      let j = 2;
      while (i * j <= n) {
        isPrime[i * j++] = false;
      }
    }
  }

  return isPrime.filter((v) => v).length;
}

// set으로 풀기

function solution2(n) {
  const s = new Set();
  s.add(2);

  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }

  for (let j = 3; j <= Math.sqrt(n); j += 2) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }

  return s.size;
}

console.log(solution(121));
console.log(solution2(121));
