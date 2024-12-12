const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(N, stairs) {
    // dp[i] = [한칸 연속, 2칸 연속]
    const dp = Array.from({ length: N + 2 }, () => [0, 0]);

    for (let i = 2; i < N + 2; i++) {
        dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + stairs[i - 2];
        dp[i][1] = dp[i - 1][0] + stairs[i - 2];
    }

    return Math.max(...dp.at(-1));
}

console.log(solution(input[0], input.slice(1)));