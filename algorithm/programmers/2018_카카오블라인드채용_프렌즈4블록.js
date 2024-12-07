/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17679
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [1차] 프렌즈4블록
 * @param {Number} m
 * @param {Number} n
 * @param {String[]} board
 * @returns {Number}
 */

function solution(m, n, board) {
  board = board.map((v) => v.split(""));
  var answer = 0;

  // 블록을 지울 수 있을 때 까지 반복
  while (true) {
    const erase = new Set();

    // 배열 순회하며 2 * 2 블록찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] &&
          board[i][j] == board[i][j + 1] &&
          board[i][j] == board[i + 1][j] &&
          board[i][j] == board[i + 1][j + 1]
        ) {
          erase.add(`${i},${j}`);
          erase.add(`${i},${j + 1}`);
          erase.add(`${i + 1},${j}`);
          erase.add(`${i + 1},${j + 1}`);
        }
      }
    }

    // 지운 블록 수 추가
    if (erase.size) {
      answer += erase.size;
    } else break;

    // 블록 0으로 변경
    for (let e of erase) {
      const [r, c] = e.split(",");
      board[r][c] = 0;
    }

    // 블록 떨구기
    for (let j = 0; j < n; j++) {
      // 열 기준 탐색
      for (let i = m - 2; i >= 0; i--) {
        // 행은 밑에서부터
        if (board[i][j]) {
          // 블록 발견
          for (let k = m - 1; k > i; k--) {
            // 다시 밑에서 부터
            if (!board[k][j]) {
              // 빈 공간 발견 시 교환 후 중단
              [board[i][j], board[k][j]] = [board[k][j], board[i][j]];
              break;
            }
          }
        }
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
