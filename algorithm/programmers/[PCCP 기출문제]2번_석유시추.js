/**
 * PCCP 기출문제 2번
 * 석유 시추
 * @param {Array} land land[i][j] 0 or 1
 * @returns {Number}
 */

function solution(land) {
  const numRows = land.length;
  const numCols = land[0].length;
  const isValid = (r, c) => 0 <= r && r < numRows && 0 <= c && c < numCols;
  const direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  const visited = Array.from({length: numRows}, () => Array(numCols).fill(false));
  const oil = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (land[i][j] && !visited[i][j]) {
        // 좌우 열 번호, 석유량
        let [left, right, cnt] = [j, j, 1];
        visited[i][j] = true;
        const stack = [[i, j]];

        // dfs 탐색
        while (stack.length) {
          let [x, y] = stack.pop();
          for (let [dx, dy] of direction) {
            let [nx, ny] = [x + dx, y + dy];
            if (isValid(nx, ny) && land[nx][ny] && !visited[nx][ny]) {
              left = Math.min(left, ny);
              right = Math.max(right, ny);
              cnt++;
              visited[nx][ny] = true;
              stack.push([nx, ny]);
            }
          }
        }

        // 탐색 종료 : 석유 정보 추가
        oil.push([left, right, cnt]);
      }
    }
  }

  const location = Array(numCols).fill(0);
  // 열별 석유랑 업데이트
  for (let [left, right, cnt] of oil) {
    for (let i = left; i <= right; i++) {
      location[i] += cnt;
    }
  }

  // 열 최대 석유량 계산
  return Math.max(...location);
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ])
);
