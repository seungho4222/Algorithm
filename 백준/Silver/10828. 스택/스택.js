const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();

let arr = [];
let top = -1;
let result = "";

for (let i = 0; i < n; i++) {
  const command = input[i].split(" ");

  if (command[0] === "pop") {
    result += top < 0 ? "-1\n" : arr[top--] + "\n";
  } else if (command[0] === "size") {
    result += top + 1 + "\n";
  } else if (command[0] === "empty") {
    result += top < 0 ? "1\n" : "0\n";
  } else if (command[0] === "top") {
    result += top < 0 ? "-1\n" : arr[top] + "\n";
  } else {
    arr[++top] = command[1];
  }
}

console.log(result);
