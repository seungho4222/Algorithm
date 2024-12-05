/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12971
 * 프로그래머스 lv3 - Summer/Winter Coding(~2018)
 * 스티커 모으기(2)
 * @param {Number[]} sticker
 * @returns {Number}
 */

function solution(sticker) {
  const n = sticker.length;

  const getSticker = (arr) => {
    const dp = [0, ...arr];

    for (let i = 2; i < dp.length; i++) {
      dp[i] = Math.max(dp[i] + dp[i - 2], dp[i - 1]);
    }

    return dp.at(-1);
  };

  if (n < 4) return Math.max(...sticker);

  const arr1 = sticker.slice(0, n - 1);
  const arr2 = sticker.slice(1);

  return Math.max(getSticker(arr1), getSticker(arr2));
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
console.log(solution([1, 3, 2, 5, 4]));
