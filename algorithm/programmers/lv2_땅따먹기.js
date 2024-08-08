/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12913
 * 프로그래머스 lv2
 * 땅따먹기
 * @param {Number[][]} land
 * @returns {Number}
 */

function solution(land) {
  let dp = [...land[0]];

  for (let i = 1; i < land.length; i++) {
    const tmp = [0, 0, 0, 0];
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        tmp[j] = Math.max(tmp[j], dp[k] + land[i][j]);
      }
    }
    dp = tmp;
  }

  return Math.max(...dp);
}

// other

function solution(land) {
  const n = land.length;

  for (let i = 1; i < n; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  return Math.max(...land[n - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
