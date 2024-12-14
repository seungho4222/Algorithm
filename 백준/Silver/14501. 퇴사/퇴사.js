const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const N = input[0][0];

const dp = new Array(N + 1).fill(0);

// Top-Down
for (let i = N - 1; i >= 0; i--) {
    if (i + input[i + 1][0] > N) {
        dp[i] = dp[i + 1];
    } else {
        dp[i] = Math.max(dp[i + 1], input[i + 1][1] + dp[i + input[i + 1][0]]);
    }
}

console.log(dp[0])