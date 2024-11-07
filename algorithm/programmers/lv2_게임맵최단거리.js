/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * 프로그래머스 lv2
 * 게임 맵 최단거리
 * @param {Number[][]} maps
 * @returns {Number}
 */

function solution(maps) {
  const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const [n, m] = [maps.length, maps[0].length];
  const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < m;
  const visited = maps.map((_) => Array(m).fill(0));
  visited[0][0] = 1;
  const queue = [[0, 0]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let [dx, dy] of d) {
      const [nx, ny] = [x + dx, y + dy];
      if (isValid(nx, ny) && maps[nx][ny] && !visited[nx][ny]) {
        if (nx === n - 1 && ny === m - 1) {
          return visited[x][y] + 1;
        } else {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
