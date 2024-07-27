/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/140107
 * 프로그래머스 lv2
 * 점 찍기
 * @param {Number} k
 * @param {Number} d
 * @returns {Number}
 */

function solution(k, d) {
  var answer = 0;
  // x축 최대값
  let max = Math.floor(d / k);

  for (let x = 0; x <= max; x++) {
    // y축 최대값
    let y = Math.floor(Math.sqrt((d * d - x ** 2 * k ** 2) / (k * k)));
    answer += y + 1;
  }

  return answer;
}

console.log(solution(3, 7));
console.log(solution(1, 5));
