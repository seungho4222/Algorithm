const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const ability = input[1].split(" ").map(Number);

let max = 0;
let [l, r] = [0, n - 1];

while (l < r) {
  const teamAbility = (r - l - 1) * Math.min(ability[l], ability[r]);
  max = Math.max(max, teamAbility);

  if (ability[l] < ability[r]) l++;
  else r--;
}

console.log(max);
