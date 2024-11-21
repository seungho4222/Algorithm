/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42897
 * 프로그래머스 lv4
 * 도둑질
 * @param {Number[]} money
 * @returns {Number}
 */

function solution(money) {
  const n = money.length;

  const getMoney = (arr) => {
    const dp = [0, ...arr];

    for (let i = 2; i < dp.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
    }

    return dp.at(-1);
  };

  const arr1 = money.slice(0, n - 1);
  const arr2 = money.slice(1);

  return Math.max(getMoney(arr1), getMoney(arr2));
}

console.log(solution([1, 2, 3, 1]));
console.log(solution([100, 1, 2, 100, 4, 5]));
