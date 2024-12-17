const [n, a] = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt").toString().trim().split("\n").map((v) => v.split(" ").map(Number));

const sortedA = a.slice().sort((a, b) => a - b);

const p = [];

for (let i = 0; i < n; i++) {
    const idx = sortedA.indexOf(a[i]);
    p.push(idx);
    sortedA[idx] = -1;
}

console.log(p.join(" "));
