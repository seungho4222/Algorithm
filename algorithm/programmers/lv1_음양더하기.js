/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * 프로그래머스 lv1 - 월간 코드 챌린지 시즌2
 * 음양 더하기
 * @param {Number[]} absolutes
 * @param {Boolean[]} signs
 * @returns {Number}
 */

function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, cur, idx) => acc + (signs[idx] ? cur : -cur),
    0
  );
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
