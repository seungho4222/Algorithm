/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 * 프로그래머스 lv2
 * 프로세스
 * @param {Number[]} priorities
 * @param {Number} location
 * @returns {Number}
 */

function solution(priorities, location) {
  var answer = 0;
  const temp = priorities.map((v, i) => [v, i]);

  top: while (true) {
    const [cv, ci] = temp.shift();

    for (let [v, i] of temp) {
      if (cv < v) {
        temp.push([cv, ci]);
        continue top;
      }
    }

    answer++;
    if (ci === location) return answer;
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
