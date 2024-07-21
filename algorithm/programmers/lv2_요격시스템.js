/**
 * 프로그래머스 lv2
 * 요격 시스템
 * @param {Array} targets targets[i] [start, end]
 * @returns {Number}
 */

function solution(targets) {
  var answer = 0;
  let curEnd = -1;

  targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i];
    if (start >= curEnd) {
      answer++;
      curEnd = end;
    }
  }

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
