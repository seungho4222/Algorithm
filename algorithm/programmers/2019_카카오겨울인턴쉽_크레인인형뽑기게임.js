function solution(board, moves) {
  var answer = 0;
  let len = board.length;
  let queue = [0];

  for (const i of moves) {
    let row = 0;
    while (true) {
      let doll = board[row][i - 1];
      if (doll) {
        if (queue[queue.length - 1] === doll) {
          answer += 2;
          queue.pop();
        } else {
          queue.push(doll);
        }
        board[row][i - 1] = 0;
        break;
      } else {
        row += 1;
        if (row === len) break;
      }
    }
  }

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

// 고수의 답

// 행 <-> 열 바꾸기
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
