/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258705
 * 프로그래머스 lv3 - 2024 KAKAO WINTER INTERNSHIP
 * 산 모양 타일링
 * @param {Number} n
 * @param {Number[]} tops
 * @returns {Number}
 */

function solution(n, tops) {
  // dp[i][0] : 마지막 타일이 마름모인 경우
  // dp[i][1] : 마지막 타일이 마름모가 아닌 경우
  const mod = 10_007;
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);
  dp[0][1] = 1;

  for (let i = 0; i < n; i++) {
    dp[i + 1][0] = (dp[i][0] + dp[i][1]) % mod;
    if (!tops[i]) {
      dp[i + 1][1] = (dp[i][0] + dp[i][1] * 2) % mod;
    } else {
      dp[i + 1][1] = (dp[i][0] * 2 + dp[i][1] * 3) % mod;
    }
  }

  return (dp[n][0] + dp[n][1]) % mod;
}

// other

function solution2(n, tops) {
  // dp[i] : 삼각형이 i + 1개일 때의 경우의 수 저장 (윗변에 붙인 정삼각형 제외)
  const MOD = 10007;
  const dp = new Array(2 * n + 1).fill(0);
  dp[0] = 1;
  dp[1] = tops[0] ? 3 : 2;

  for (let i = 2; i < 2 * n + 1; i++) {
    // dp[i]는 아래의 경우로 만들 수 있다
    // dp[i - 1] + 삼각형 추가 (윗변에 정삼각형을 붙인 경우 + 마름모 추가도 가능)
    // dp[i - 2] + 마름모 추가
    if (i % 2 === 1 && tops[Math.floor(i / 2)] === 1) {
      dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % MOD;
    } else {
      dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
  }
  
  return dp[2 * n];
}

console.log(solution(4, [1, 1, 0, 1]));
console.log(solution(2, [0, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
