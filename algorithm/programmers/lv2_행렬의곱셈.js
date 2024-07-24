/**
 * 프로그래머스 lv2
 * 행렬의 곱셈
 * @param {Array} arr1 2차원 행렬
 * @param {Array} arr2 2차원 행렬
 * @returns {Array} 2차원 행렬
 */

function solution(arr1, arr2) {
  const numRows = arr1.length;
  const numCols = arr2[0].length;
  var answer = [];

  for (let i = 0; i < numRows; i++) {
    const tmp = [];
    for (let j = 0; j < numCols; j++) {
      let num = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        num += arr1[i][k] * arr2[k][j];
      }
      tmp.push(num);
    }
    answer.push(tmp);
  }

  return answer;
}

// other
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((_, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3, 4],
      [3, 3, 4],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
