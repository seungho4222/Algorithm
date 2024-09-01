/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12952
 * 프로그래머스 lv2
 * N-Queen
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  var answer = 0;
  const board = Array.from({ length: n }, () => new Array(n).fill(0));

  const check = (r, c, arr) => {
    // 좌측 상단
    let [i, j] = [r - 1, c - 1];
    while (i >= 0 && j >= 0) {
      if (arr[i][j]) return false;
      i--;
      j--;
    }

    // 우측 상단
    [i, j] = [r - 1, c + 1];
    while (i >= 0 && j < n) {
      if (arr[i][j]) return false;
      i--;
      j++;
    }

    // 상단
    [i, j] = [r - 1, c];
    while (i >= 0) {
      if (arr[i][j]) return false;
      i--;
    }

    return true;
  };

  const backtracking = (row, arr) => {
    if (row === n) {
      answer++;
      return;
    }

    for (let col = 0; col < n; col++) {
      arr[row][col] = 1;
      if (check(row, col, arr)) {
        backtracking(row + 1, arr);
      }
      arr[row][col] = 0;
    }
  };

  backtracking(0, board);

  return answer;
}

console.log(solution(8));
