const input = +require("fs").readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "test.txt"
);

function solution(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[3] = 1;
  dp[5] = 1;

  for (let i = 6; i <= n; i++) {
    dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
  }

  return dp[n] === Infinity ? -1 : dp[n];
}

console.log(solution(input));
