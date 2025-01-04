const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
let answer = 0;

top: for (let word of input) {
  const set = new Set(word[0]);

  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] !== word[i]) {
      if (set.has(word[i])) continue top;
      else {
        set.add(word[i]);
      }
    }
  }

  answer++;
}

console.log(answer);
