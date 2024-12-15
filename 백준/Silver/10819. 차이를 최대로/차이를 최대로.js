const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

let result = 0;

const f = (cnt, list) => {
  if (cnt == N) {
    let sum = 0;

    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(arr[list[i]] - arr[list[i + 1]]);
    }
    result = Math.max(result, sum);

    return;
  }

  for (let j = 0; j < N; j++) {
    if (!list.includes(j)) {
      f(cnt + 1, list.concat([j]));
    }
  }
};

f(0, []);

console.log(result);
