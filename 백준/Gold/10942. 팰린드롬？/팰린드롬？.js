const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;

const N = +input[i++];
const arr = [0, ...input[i++].split(" ").map(Number)];

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i < N; i++) {
  dp[i][i] = 1;
  if (arr[i] === arr[i + 1]) dp[i][i + 1] = 1;
}
dp[N][N] = 1;

for (let diff = 2; diff < N; diff++) {
  for (let s = 1; s <= N - diff; s++) {
    if (arr[s] === arr[s + diff] && dp[s + 1][s + diff - 1]) dp[s][s + diff] = 1;
  }
}

const M = +input[i++];
const result = [];

for (; i < M + 3; i++) {
  const [l, r] = input[i].split(" ").map(Number);
  result.push(dp[l][r]);
}

console.log(result.join("\n"));
