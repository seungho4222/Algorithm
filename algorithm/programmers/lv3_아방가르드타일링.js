/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181186
 * 프로그래머스 lv3
 * 아방가르드 타일링
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  const mod = 1_000_000_007;
  const dp = [1, 1, 3, 10, 23, 62];
  for (let i = 6; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2 + dp[i - 3] * 6 + dp[i - 4] - dp[i - 6] + mod) % mod;
  }

  return dp[n];
}

/**
  - n일 때만 만들 수 있는 조합 찾기
  unique Tile = [1, 2, 5, 2, 2, 4, 2, 2, 4, ...]
  n = 4 + 3k / 5 + 3k / 6 + 3k 인 경우 2 / 2 / 4 의 값이 반복
  
  - 점화식
  DP(x) = DP(x-1) + 2*DP(x-2) + 5*DP(x-3) + 2*DP(x-4) + 2*DP(x-5) + 4*DP(x-6) + 2*DP(x-7) + 2*DP(x-8) + 4*DP(x-9) + ...
  DP(x-3) = DP(x-4) + 2*DP(x-5) + 5*DP(x-6) + 2*DP(x-7) + 2*DP(x-8) + 4*DP(x-9) + ...

  - 정리
  DP(x) = DP(x-1) + 2*DP(x-2) + 6*DP(x-3) + DP(x-4) - DP(x-6)
 */
