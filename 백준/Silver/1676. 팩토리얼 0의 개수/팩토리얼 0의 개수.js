const input = +require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim();

let cnt = 0;

for (let i = 5; i <= input; i++) {
  let tmp = i;
  while (tmp % 5 == 0) {
    cnt++;
    tmp /= 5;
  }
}

console.log(cnt);
