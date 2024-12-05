/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250134
 * 프로그래머스 lv3 - PCCP 기출문제 4번
 * 수레 움직이기
 * @param {Number[][]} maze
 * @returns {Number}
 */

function solution(maze) {
  let answer = 16;
  const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const n = maze.length;
  const m = maze[0].length;

  let redS, redE, blueS, blueE;

  // 퍼즐 정보 세팅
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 1) redS = [i, j];
      else if (maze[i][j] === 2) blueS = [i, j];
      else if (maze[i][j] === 3) redE = [i, j];
      else if (maze[i][j] === 4) blueE = [i, j];
    }
  }

  const redVisited = new Set();
  const blueVisited = new Set();

  // 이동 가능 여부 체크 함수
  const isValid = (r, c, visited, end) => {
    // 칸이 도착 칸이면 항상 유효함
    if (r === end[0] && c === end[1]) return true;

    // 퍼즐판 범위 내, 벽 여부, 방문 여부 확인
    return r >= 0 && r < n && c >= 0 && c < m && maze[r][c] !== 5 && !visited.has(`${r},${c}`);
  };

  // 백트래킹 재귀 함수
  const backtracking = (red, blue, move) => {
    if (move >= answer) return;

    // 두 수레가 모두 도착한 경우 최소값 갱신
    if (red[0] === redE[0] && red[1] === redE[1] && blue[0] === blueE[0] && blue[1] === blueE[1]) {
      answer = move;
      return;
    }

    for (let rd of d) {
      for (let bd of d) {
        let nRed = [red[0] + rd[0], red[1] + rd[1]];
        let nBlue = [blue[0] + bd[0], blue[1] + bd[1]];

        // 이미 도착칸에 위치한 경우 도착칸 고정
        if (red[0] === redE[0] && red[1] === redE[1]) nRed = red;
        if (blue[0] === blueE[0] && blue[1] === blueE[1]) nBlue = blue;

        // 움직일 수 없는 칸인 경우 스킵
        if (!isValid(nRed[0], nRed[1], redVisited, redE) || !isValid(nBlue[0], nBlue[1], blueVisited, blueE)) continue;

        // 두 수레가 겹치는 경우 스킵
        if (nRed[0] === nBlue[0] && nRed[1] === nBlue[1]) continue;

        // 두 수레가 자리를 바꾼 경우 스킵
        if (nRed[0] === blue[0] && nRed[1] === blue[1] && nBlue[0] === red[0] && nBlue[1] === red[1]) continue;

        // 다음 탐색 전 이동정보 기록
        redVisited.add(`${nRed[0]},${nRed[1]}`);
        blueVisited.add(`${nBlue[0]},${nBlue[1]}`);

        backtracking(nRed, nBlue, move + 1);

        redVisited.delete(`${nRed[0]},${nRed[1]}`);
        blueVisited.delete(`${nBlue[0]},${nBlue[1]}`);
      }
    }
  };

  redVisited.add(`${redS[0]},${redS[1]}`);
  blueVisited.add(`${blueS[0]},${blueS[1]}`);

  backtracking(redS, blueS, 0);

  return answer === 16 ? 0 : answer;
}

console.log(
  solution([
    [1, 4],
    [0, 0],
    [2, 3],
  ])
);
console.log(
  solution([
    [1, 0, 2],
    [0, 0, 0],
    [5, 0, 5],
    [4, 0, 3],
  ])
);
console.log(
  solution([
    [1, 5],
    [2, 5],
    [4, 5],
    [3, 5],
  ])
);
console.log(solution([[4, 1, 2, 3]]));
