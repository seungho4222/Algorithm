/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/67259
 * 2020 카카오 인턴십
 * 경주로 건설
 * @param {Number[][]} board board[i] 0 or 1
 * @returns {Number}
 */

function solution(board) {
  const n = board.length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const dp = Array.from(Array(n), () => Array(n).fill(1e9));
  const queue = [[0, 0, 0, 0]];

  while (queue.length > 0) {
    let [x, y, pdir, cost] = queue.shift();
    // dp 저장
    if (dp[x][y] > cost) dp[x][y] = cost;
    // 이전탐색보다 500 이상 높을 시 탐색 불필요
    else if (dp[x][y] + 500 <= cost) continue;

    // 도착
    if (x === n - 1 && y === n - 1) continue;

    // 델타 탐색
    for (const [dx, dy] of dir) {
      const [nx, ny] = [x + dx, y + dy];
      // 이동 가능 경로 체크
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
        let newCost = cost + 100;
        // 시작점 예외 처리 + 이전방향과 다른지 체크
        if (pdir && (pdir[0] !== dx || pdir[1] !== dy)) newCost += 500;
        queue.push([nx, ny, [dx, dy], newCost]);
      }
    }
  }

  return dp[n - 1][n - 1];
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ])
);
