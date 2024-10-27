/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86052
 * 프로그래머스 lv2 - 월간 코드 챌린지 시즌3
 * 빛의 경로 사이클
 * @param {String[]} grid
 * @returns {Number[]}
 */

function solution(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let answer = [];

  // 각 칸의 4가지 이동경로 배열
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Array(4).fill(0))
  );

  // 빛의 다음 이동 경로 찾기
  // 0: 동, 1: 서, 2: 남, 3: 북
  const move = (prev, path) => {
    if (path === "L") {
      switch (prev) {
        case 0:
          return 3;
        case 1:
          return 2;
        case 2:
          return 0;
        case 3:
          return 1;
      }
    } else if (path === "R") {
      switch (prev) {
        case 0:
          return 2;
        case 1:
          return 3;
        case 2:
          return 1;
        case 3:
          return 0;
      }
    } else return prev;
  };

  // 모든 경로 탐색
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < 4; k++) {
        // 사이클이 확인되지 않은 경로
        if (visited[i][j][k] === 0) {
          let cycle = 0;
          let [r, c, d] = [i, j, k];

          while (visited[r][c][d] === 0) {
            visited[r][c][d] = 1;
            // 빛 쏘기
            if (d === 0) {
              c = (c + 1) % col;
            } else if (d === 1) {
              c = (c - 1 + col) % col;
            } else if (d === 2) {
              r = (r + 1) % row;
            } else {
              r = (r - 1 + row) % row;
            }
            d = move(d, grid[r][c]);

            cycle++;
          }

          answer.push(cycle);
        }
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution(["SL", "LR"], [16]));
console.log(solution(["S"], [1, 1, 1, 1]));
console.log(solution(["R", "R"], [4, 4]));
console.log(solution(["S", "S"], [1, 1, 1, 1, 2, 2]));
