/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * 프로그래머스 lv2
 * 소수 찾기
 * @param {String} numbers
 * @returns {Number}
 */

function solution(numbers) {
  const len = numbers.length;
  const map = new Map();

  // 소수 확인
  const isPrime = (n) => {
    for (let i = 2; i <= n ** 0.5; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // 조합
  const comb = (str, visited) => {
    const numToStr = +str;
    if (numToStr > 1 && !map.has(numToStr)) {
      map.set(numToStr, isPrime(numToStr));
    }

    for (let i = 0; i < len; i++) {
      if (visited[i]) continue;
      const newVisited = [...visited];
      newVisited[i] = true;
      comb(str + numbers[i], newVisited);
    }
  };

  comb("", new Array(len).fill(false));

  return Array.from(map.values()).filter((v) => v === true).length;
}

console.log(solution("17", 3));
console.log(solution("011", 2));
