/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43236
 * 프로그래머스 lv4
 * 징검다리
 * @param {Number} distance
 * @param {Number[]} rocks
 * @param {Number} n
 * @returns {Number}
 */

function solution(distance, rocks, n) {
  const length = rocks.length;
  rocks.sort((a, b) => a - b);

  // 바위 사이 거리의 가능한 최솟값
  let l = Math.min(rocks[0], distance - rocks[length - n - 1]);
  for (let i = 1; i < length - n; i++) l = Math.min(l, rocks[i] - rocks[i - 1]);

  // 바위 사이 거리의 가능한 최댓값 (모든 간격이 균등한 경우)
  let r = ~~(distance / (length - n + 1));

  while (l <= r) {
    // 바위 사이 간격 기준점
    const m = ~~((l + r) / 2);
    // 사용해야 하는 바위 수
    let rockCnt = length - n;
    // 바위 사이 간격이 모두 m 이상인지 체크
    let check = false;

    let prev = 0;
    for (let i = 0; i < length; i++) {
      // 바위 사용
      if (rocks[i] - prev >= m) {
        rockCnt--;
        // 모두 사용
        if (!rockCnt) {
          // 현재 바위와 목적지 사이 거리가 m 이상이면 성공
          if (distance - rocks[i] >= m) {
            check = true;
          }
          break;
        }
        // 다음 바위와 간격 비교 위해 갱신
        prev = rocks[i];
      }
      // 바위 미사용 시 조건 불필요
    }

    if (check) l = m + 1;
    else r = m - 1;
  }

  return r;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
console.log(solution(12, [2, 4, 6, 7, 10], 2));
