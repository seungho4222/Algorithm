/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/160585
 * 프로그래머스 lv2
 * 혼자서 하는 틱택토
 * @param {String[]} board board[i] 'O' or 'X' or '.'
 * @returns {Number} 1 or 0
 */

function solution(board) {
  let oCnt = 0;
  let xCnt = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") oCnt++;
      if (board[i][j] === "X") xCnt++;
    }
  }

  // 빙고 체크
  const check = (turn, arr) => {
    const bingo = turn.repeat(3);
    for (let i = 0; i < 3; i++) {
      // 가로 체크
      if (arr[i] === bingo) return true;
      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          // 세로 체크
          if (arr[0][j] + arr[1][j] + arr[2][j] === bingo) return true;
        }
      }
    }
    // 대각선 체크
    if (arr[0][0] + arr[1][1] + arr[2][2] === bingo) return true;
    if (arr[0][2] + arr[1][1] + arr[2][0] === bingo) return true;

    return false;
  };

  // 문자 표시를 잘못한 경우
  if (Math.abs(oCnt - xCnt) > 1 || oCnt < xCnt) return 0;

  // 경기가 끝나도 계속한 경우
  const oBingo = check("O", board);
  const xBingo = check("X", board);

  if (oBingo && xBingo) return 0;
  if (oBingo && !xBingo && oCnt === xCnt) return 0;
  if (!oBingo && xBingo && oCnt !== xCnt) return 0;

  return 1;
}

console.log(solution(["O.X", ".O.", "..X"]));
console.log(solution(["OOO", "...", "XXX"]));
console.log(solution(["...", ".X.", "..."]));
console.log(solution(["...", "...", "..."]));
