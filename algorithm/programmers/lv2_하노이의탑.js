/**
 * 프로그래머스 lv2
 * 하노이의 탑
 * @param {Number} n
 * @returns {Array} returns[i] [start, end]
 */

function solution(n) {
  var answer = [];

  function hanoi(n, start, end, save) {
    if (n === 1) {
      answer.push([start, end]);
    } else {
      hanoi(n - 1, start, save, end);
      answer.push([start, end]);
      hanoi(n - 1, save, end, start);
    }
  }

  hanoi(n, 1, 3, 2);

  return answer;
}

console.log(solution(3));
