/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/148652
 * 프로그래머스 lv2
 * 유사 칸토어 비트열
 * @param {Number} n
 * @param {Number} l
 * @param {Number} r
 * @returns {Number}
 */

function solution(n, l, r) {
  var answer = 0;

  for (let i = l - 1; i < r; i++) {
    let index = i;
    // 5로 나눠 나머지가 2인 경우가 있으면 0 비트
    while (index >= 5 && index % 5 !== 2) {
      index = Math.floor(index / 5);
    }

    if (index % 5 !== 2) answer++;
  }

  return answer;
}

// other

function solution(n, l, r) {
  let answer = 0;

  for (let i = l - 1; i <= r - 1; i++) {
    if (!i.toString(5).match("2")) answer += 1;
  }

  return answer;
}

console.log(solution(2, 4, 17));
console.log(solution(3, 1, 125));
