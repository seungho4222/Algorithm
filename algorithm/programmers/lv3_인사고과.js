/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/152995
 * 프로그래머스 lv3
 * 인사고과
 * @param {Number[][]} scores scores[i] [근무태도점수, 동료평가점수]
 * @returns {Number}
 */

function solution(scores) {
  const wanho = scores.shift();

  // 인센티브 받는 사람들
  const asc = scores.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  const incentive = [];

  for (let i = 0; i < asc.length; i++) {
    const p1 = asc[i];

    if (wanho[0] < p1[0] && wanho[1] < p1[1]) return -1;

    while (incentive.length) {
      const p2 = incentive[incentive.length - 1];
      if (p2[0] < p1[0] && p2[1] < p1[1]) {
        incentive.pop();
      } else break;
    }
    incentive.push(p1);
  }

  // 완호보다 석차 높은 사원 카운트
  return incentive.filter((p) => p[0] + p[1] > wanho[0] + wanho[1]).length + 1;
}

// other

function solution(scores) {
  let answer = 0;
  const wanho = scores[0];
  // 근무태도 내림차순, 동료평가 오름차순
  scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  // 동료평가점수의 최댓값 기록
  let max = 0;

  for (let score of scores) {
    // 동료평가점수가 최댓값보다 낮으면 탈락대상 -> 정렬기준에 따라 근무태도점수는 항상 낮음

    if (score[1] < max) {
      // 탈락대상
      if (score === wanho) return -1;
    } else {
      // 인센티브 대상
      max = Math.max(max, score[1]);
      if (score[0] + score[1] > wanho[0] + wanho[1]) answer++;
    }
  }

  return answer + 1;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ])
);
console.log(
  solution([
    [3, 3],
    [4, 2],
    [1, 7],
    [2, 8],
    [5, 2],
    [4, 3],
    [2, 3],
    [6, 1],
  ])
);
