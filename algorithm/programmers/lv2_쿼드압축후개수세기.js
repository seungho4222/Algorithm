/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68936
 * 프로그래머스 lv1 - 월간 코드 챌린지 시즌1
 * 쿼드압축 후 개수 세기
 * @param {Number[][]} arr
 * @returns {Number[]}
 */

function solution(arr) {
  if (arr.every((row) => row.every((v) => v === 1))) return [0, 1];
  if (arr.every((row) => row.every((v) => v === 0))) return [1, 0];

  const n = arr.length / 2;
  const arr1 = arr.splice(0, n);
  const arr2 = arr1.map((row) => row.splice(n, n));
  const arr3 = arr;
  const arr4 = arr3.map((row) => row.splice(n, n));

  return [arr1, arr2, arr3, arr4].reduce(
    (acc, cur) => solution(cur).map((v, i) => v + acc[i]),
    [0, 0]
  );
}

// other

function solution(arr) {
  const quadZip = (row, col, n) => {
    if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];

    let cnt0 = 0, cnt1 = 0;
    n >>= 1;

    for (let [i, j] of [[0, 0], [0, 1], [1, 0], [1, 1]]) {
      let [zero, one] = quadZip(row + i * n, col + j * n, n);
      cnt0 += zero;
      cnt1 += one;
    }

    if (cnt0 === 0) return [0, 1];
    if (cnt1 === 0) return [1, 0];

    return [cnt0, cnt1];
  };
  
  return quadZip(0, 0, arr.length);
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);
