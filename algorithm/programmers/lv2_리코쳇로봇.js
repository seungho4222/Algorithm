function solution(board) {
  var answer = 1e9;
  let row_len = board.length;
  let col_len = board[0].length;

  // 좌표 유효 범위 확인 함수
  const is_valid = (r, c) => {
    return 0 <= r && r < row_len && 0 <= c && c < col_len;
  };

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let robot = [-1, -1];

  // 시작 위치 찾기
  for (let i = 0; i < row_len; i++) {
    for (let j = 0; j < col_len; j++) {
      if (board[i][j] === "R") robot = [i, j];
    }
  }

  // stack에 [x좌표, y좌표, 현재 이동값] 저장
  let stack = [[...robot, 0]];

  // 방문 여부 체크
  let visited = Array.from({ length: row_len }, () => Array(col_len).fill(0));

  while (stack.length > 0) {
    let shift = stack.shift();
    visited[shift[0]][shift[1]] = 1;

    // 목표 찾으면 이동값 저장 후 반복문 종료
    if (board[shift[0]][shift[1]] === "G") {
      answer = shift[2];
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nx = shift[0] + dx[i];
      let ny = shift[1] + dy[i];

      // 갈 수 있으면 계속 가보기
      while (is_valid(nx, ny) && board[nx][ny] !== "D") {
        nx += dx[i];
        ny += dy[i];
      }

      nx -= dx[i];
      ny -= dy[i];

      // 방문 안했다면 기록 후 스택 추가
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 1;
        stack.push([nx, ny, shift[2] + 1]);
      }
    }
  }

  if (answer === 1e9) answer = -1;

  return answer;
}

solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]);
solution([".D.R", "....", ".G..", "...D"]);
