function solution(info, n, m) {
    const len = info.length;
    // 행: 물건 번호, 열: B 흔적, 값: A 흔적
    const dp = Array.from({ length: len + 1 }, () => Array(m).fill(1e9));
    dp[0][0] = 0;
    
    // 각 물건 확인
    for (let i = 1; i <= len; i++) {
        const [a, b] = info[i - 1];
        
        // 가능한 B 흔적 확인
        for (let j = 0; j < m; j++) {
            // A도둑
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + a);
            // B도둑
            if (j + b < m) {
                dp[i][j + b] = Math.min(dp[i][j + b], dp[i - 1][j]);
            }
        }
    }
    
    const minA = Math.min(...dp[len]);
    
    return minA < n ? minA : -1;
}