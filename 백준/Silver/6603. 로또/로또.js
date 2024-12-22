const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;

function combination(idx, arr, pick, n) {
  if (pick.length + n - idx < 6) return;

  if (pick.length == 6) {
    console.log(pick.join(" "));
    return;
  }

  for (let j = idx; j < n; j++) {
    pick.push(arr[j]);
    combination(j + 1, arr, pick, n);
    pick.pop();
  }
}

while (true) {
  const [k, ...lotto] = input[i++].split(" ").map(Number);
  combination(0, lotto, [], k);

  if (input[i][0] == "0") {
    break;
  } else console.log("");
}
