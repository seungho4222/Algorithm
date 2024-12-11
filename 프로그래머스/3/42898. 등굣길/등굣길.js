function solution(m, n, puddles) {
    const divisor = 1_000_000_007;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 물웅덩이 표시
    for (let [c, r] of puddles) {
        dp[r][c] = -1;
    }

 	// 시작점 초기화
  	dp[1][1] = 1;

  	// 경로 계산
  	for (let i = 1; i <= n; i++) {
    	for (let j = 1; j <= m; j++) {
      		// 시작점 건너뛰기
      		if (i == 1 && j == 1) continue;

      		// 물웅덩이의 경우, 0으로 설정
      		if (dp[i][j] == -1) {
        		dp[i][j] = 0;
        		continue;
      		}

      		// 점화식 적용 : [i, j] = [i - 1, j] + [i, j - 1]
      		dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % divisor;
    	}
  	}

  	return dp[n][m];
}