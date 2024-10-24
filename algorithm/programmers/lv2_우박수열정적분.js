/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/134239
 * 프로그래머스 lv2
 * 우박수열 정적분
 * @param {Number} k
 * @param {Number[][]} ranges
 * @returns {Number[]}
 */

function solution(k, ranges) {
  // 우박수열 정적분 누적합 배열
  const areas = [0];

  while (k > 1) {
    const prev = k;
    k = k % 2 ? k * 3 + 1 : k / 2;

    const area = Math.abs(k - prev) / 2 + Math.min(k, prev);
    // const area = (k + prev) / 2;
    areas.push(areas.at(-1) + area);
  }

  const n = areas.length;

  return ranges.map(([l, r]) => {
    if (l < n + r) return areas[n + r - 1] - areas[l];
    // return areas.at(r - 1) - areas[l];
    else return -1.0;
  });
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);
console.log(
  solution(3, [
    [0, 0],
    [1, -2],
    [3, -3],
  ])
);
