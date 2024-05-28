function solution(maps) {
  var answer = -1;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const is_valid = (r, c) => {
    return 0 <= r && r < maps.length && 0 <= c && c < maps[0].length;
  };

  let queue = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") queue = [[i, j]];
    }
  }

  // 방문 시간 기록 배열
  let visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(-1)
  );

  visited[queue[0][0]][queue[0][1]] = 0;

  // 레버 당김 여부
  let is_pull = false;

  while (queue.length) {
    let [x, y] = queue.shift();

    // 레버 당기고 해당 위치에서 탐색 재시작
    if (!is_pull && maps[x][y] === "L") {
      is_pull = true;
      let temp = visited[x][y];
      visited = visited.map((row) => row.fill(-1));
      visited[x][y] = temp;
      queue = [[x, y]];
    }

    // 도착시 방문 시간 기록 후 종료
    if (is_pull && maps[x][y] === "E") {
      answer = visited[x][y];
      break;
    }

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (is_valid(nx, ny) && maps[nx][ny] !== "X" && visited[nx][ny] < 0) {
        queue.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }

  return answer;
}

solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]);
solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]);
