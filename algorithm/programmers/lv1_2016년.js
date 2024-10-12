/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 프로그래머스 lv1
 * 2016년
 * @param {Number} a
 * @param {Number} b
 * @returns {String}
 */

function solution(a, b) {
  // const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // const dayOfWeek = week[new Date(2016, a - 1, b).getDay()];

  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const numberOfDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = numberOfDays.slice(0, a).reduce((acc, cur) => acc + cur, b - 1);
  days %= 7;

  const dayOfWeek = week[days];

  return dayOfWeek;
}

console.log(solution(1, 1));
console.log(solution(5, 24));
