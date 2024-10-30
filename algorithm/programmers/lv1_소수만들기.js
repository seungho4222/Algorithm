/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12977
 * 프로그래머싀 lv1 - Summer/Winter Coding(~2018)
 * 소수 만들기
 * @param {Number[]} nums
 * @returns {Number}
 */

function solution(nums) {
  let answer = 0;

  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const comb = (idx, num, n) => {
    if (n === 3) {
      if (isPrime(num)) answer++;
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      comb(i + 1, num + nums[i], n + 1);
    }
  };

  comb(0, 0, 0);

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
