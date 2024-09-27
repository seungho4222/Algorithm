/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17687
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [3차] n진수 게임
 * @param {Number} n
 * @param {Number} t
 * @param {Number} m
 * @param {Number} p
 * @returns {String}
 */

function solution(n, t, m, p) {
  var answer = "";
  let num = 0;
  let turn = 1;
  if (m === p) p = 0;

  while (answer.length < t) {
    const convertedNum = num.toString(n);
    for (let i = 0; i < convertedNum.length; i++) {
      if (turn % m === p) answer += convertedNum[i];

      turn++;
    }
    num++;
  }

  return answer.slice(0, t).toUpperCase();
}

// other

function solution2(n, t, m, p) {
  const tubeT = new Array(t).fill(0).map((_, i) => i * m + p - 1);
  let line = "";
  const max = m * t;
  for (var i = 0; line.length <= max; i++) {
    line += i.toString(n);
  }

  return tubeT.map((v) => line[v]).join("").toUpperCase();
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution2(16, 16, 2, 2));
