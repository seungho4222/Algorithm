const d = (num) => {
    let next = num;
    num = String(num).split("").map(Number);
    for (let n of num) next += n;

    return next;
}

const dp = new Array(10001).fill(true);

for (let i = 1; i < 10001; i++) {
    dp[d(i)] = false;
    if (dp[i]) {
        console.log(i)
    }
}
