/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * 프로그래머스 lv2
 * 타겟 넘버
 * @param {Number[]} numbers
 * @param {Number} target
 * @returns {Number}
 */

function solution(numbers, target) {
  const n = numbers.length;
  var answer = 0;

  const comb = (idx, num) => {
    if (idx === n) {
      if (num === target) answer++;
      return;
    }

    comb(idx + 1, num + numbers[idx]);
    comb(idx + 1, num - numbers[idx]);
  };

  comb(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
