const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
    const dp = new Array(num + 1).fill(1n);

    for (let i = 3; i <= num; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[num] + "";
}

console.log(solution(input));