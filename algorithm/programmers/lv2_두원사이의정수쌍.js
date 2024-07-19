/**
 * 프로그래머스 lv2
 * 두 원 사이의 정수 쌍
 * @param {Number} r1 
 * @param {Number} r2 
 * @returns {Number}
 */

function solution(r1, r2) {
  var answer = 0;

  for (let i = 1; i <= r2; i++) {
    if (i < r1) {
        answer += Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) - Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) + 1;
    } else {
        answer += Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) + 1;
    }
  }

  return answer * 4;
}

console.log(solution(5, 6));
console.log(solution(9, 10));
