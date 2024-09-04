/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * 프로그래머스 lv1 - 월간 코드 챌린지 시즌1
 * 두 개 뽑아서 더하기
 * @param {Number[]} numbers
 * @returns {Number[]}
 */

function solution(numbers) {
  const n = numbers.length;
  const answer = new Set();

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
  // return [...answer].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([0, 100, 1000, 10]));
