function solution(n) {
    if (n % 2) return 0;
    
    const divisor = 1_000_000_007;
    const dp = new Array(n + 1).fill(0);
    let connected = 1;
    dp[2] = 3;
    // dp[4] = 3 * 3 + 2 * (1);
    // dp[6] = 11 * 3 + 2 * (3 + 1);
    // dp[8] = 41 * 3 + 2 * (11 + 3 + 1);
    // dp[10] = 153 * 3 + 2 * (41 + 11 + 3 + 1);
    
    for (let i = 4; i <= n; i += 2) {
        dp[i] = (dp[i - 2] * 3 + 2 * connected) % divisor;
        connected += dp[i - 2];
    }
    
    return dp[n];
}