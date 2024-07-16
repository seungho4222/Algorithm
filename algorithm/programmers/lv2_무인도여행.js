/**
 * 프로그래머스 lv2
 * 무인도 여행
 * @param {Array} maps maps[i] "X123X"
 * @returns {Array} returns[i] number
 */

function solution(maps) {
  const numRows = maps.length;
  const numCols = maps[0].length;
  const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
  const isValid = (x, y) => 0 <= x && x < numRows && 0 <= y && y < numCols;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  var answer = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        let num = 0;
        let stack = [[i, j]];

        while (stack.length) {
          let [x, y] = stack.pop();
          if (!isValid(x, y) || maps[x][y] === "X" || visited[x][y]) continue;

          visited[x][y] = true;
          num += Number(maps[x][y]);

          for (const [dx, dy] of directions) {
            stack.push([x + dx, y + dy]);
          }
        }

        answer.push(num);
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["X5XX5X", "111111", "XXXXXX", "111111"]));
