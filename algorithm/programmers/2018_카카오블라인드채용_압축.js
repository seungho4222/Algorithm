/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17684
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [3차] 압축
 * @param {String} msg
 * @returns {Number[]}
 */

function solution(msg) {
  const answer = [];
  const dict = new Map();
  let size = 1;

  for (let i = 0; i < 26; i++) {
    dict.set(String.fromCharCode(65 + i), size++);
  }

  let idx = 0;
  while (idx < msg.length) {
    let w = msg[idx];

    while (++idx < msg.length && dict.has(w + msg[idx])) {
      w += msg[idx];
    }

    answer.push(dict.get(w));
    if (idx < msg.length) dict.set(w + msg[idx], size++);
  }

  return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
