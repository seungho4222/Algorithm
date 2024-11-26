/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12979
 * 프로그래머스 lv3 - Summer/Winter Coding(~2018)
 * 기지국 설치
 * @param {Number} n
 * @param {Number[]} stations
 * @param {Number} w
 * @returns {Number}
 */

function solution(n, stations, w) {
  let answer = 0;
  let right = 0; // 기지국 전파 범위
  stations.push(n + w + 1); // 설치된 마지막 기지국 이후 범위 확인용

  for (let station of stations) {
    const left = station - w;

    if (right + 1 < left) {
      answer += Math.ceil((left - right - 1) / (w * 2 + 1));
    }

    right = station + w;
  }

  return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
