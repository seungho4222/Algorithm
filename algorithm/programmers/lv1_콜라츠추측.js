/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12943
 * 프로그래머스 lv1
 * 콜라츠 추측
 * @param {Number} num
 * @returns {Number}
 */

function solution(num) {
  let cnt = 0;

  while (num !== 1) {
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;

    if (++cnt > 500) return -1;
  }

  return cnt;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
