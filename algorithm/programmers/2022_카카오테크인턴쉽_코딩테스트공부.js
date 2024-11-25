/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118668
 * 프로그래머스 lv3 - 2022 KAKAO TECH INTERNSHIP
 * 코딩 테스트 공부
 * @param {Number} alp
 * @param {Number} cop
 * @param {Number[]} problems
 * @returns {Number}
 */

function solution(alp, cop, problems) {
  let [maxA, maxC] = [alp, cop];

  // 모든 문제를 풀 수 있는 최소 알고력, 코딩력 찾기
  problems.forEach((v) => {
    maxA = Math.max(maxA, v[0]);
    maxC = Math.max(maxC, v[1]);
  });

  // dp 배열 생성 및 초기화
  const dp = Array.from({ length: maxA + 1 }, () =>
    Array(maxC + 1).fill(Infinity)
  );
  dp[alp][cop] = 0;

  // 모든 알고력, 코딩력 조회 (최대 150 * 150)
  for (let i = alp; i <= maxA; i++) {
    for (let j = cop; j <= maxC; j++) {
      // 공부로 알고력, 코딩력 증가
      if (i < maxA) dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      if (j < maxC) dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);

      if (i === maxA && j === maxC) break;

      // 문제풀이로 알고력, 코딩력 증가 (최대 100)
      for (let [aReq, cReq, aRwd, cRwd, cost] of problems) {
        if (i >= aReq && j >= cReq) {
          const newA = Math.min(maxA, i + aRwd);
          const newC = Math.min(maxC, j + cRwd);
          dp[newA][newC] = Math.min(dp[newA][newC], dp[i][j] + cost);
        }
      }
    }
  }

  return dp[maxA][maxC];
}

console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ])
);
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
);
