let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let num = Number(input);

const dp = Array(num + 1).fill(Infinity);
dp[1] = 0;

for (let i = 1; i < num; i++) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
}

console.log(dp[num]);