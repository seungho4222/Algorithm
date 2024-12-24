const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const board = input.map((v) => [...v.trim()]);
let result = 0;

const maxCheck = (board) => {
  let max = 0;
  for (let k = 0; k < n; k++) {
    // 열 확인
    let temp = 1;
    for (let i = 1; i < n; i++) {
      if (board[i - 1][k] === board[i][k]) temp++;
      else temp = 1;
      max = Math.max(max, temp);
    }

    // 행 확인
    const matches = board[k].join("").match(/C+|P+|Z+|Y+/g);
    max = Math.max(max, ...matches.map((v) => v.length));
  }

  return max;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 아래 교환
    if (i < n - 1 && board[i][j] !== board[i + 1][j]) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      result = Math.max(result, maxCheck(board));
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
    }

    // 오른쪽 교환
    if (j < n - 1 && board[i][j] !== board[i][j + 1]) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      result = Math.max(result, maxCheck(board));
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
    }
  }
}

console.log(result);
