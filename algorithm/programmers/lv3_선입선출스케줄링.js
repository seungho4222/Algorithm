/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12920
 * 프로그래머스 lv3
 * 선입 선출 스케줄링
 * @param {Number} n
 * @param {Number[]} cores
 * @returns {Number}
 */

function solution(n, cores) {
  if (cores.length >= n) return n;

  let left = 0;
  let right = Math.max(...cores) * n;
  let time = 0;

  // 이진탐색으로 작업 처리 완료 시점 탐색
  while (left <= right) {
    const mid = ~~((left + right) / 2);
    let totalCompleted = 0;

    // mid 시간까지 처리된 작업 수 계산
    for (const core of cores) {
      totalCompleted += ~~(mid / core) + 1;
    }

    if (totalCompleted >= n) {
      time = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // time 직전의 작업 처리
  for (const core of cores) {
    n -= ~~((time - 1) / core) + 1;
  }

  // 남은 작업 분배
  for (let i = 0; i < cores.length; i++) {
    // time 시간에 마지막 작업이 처리되므로 처리 가능한 코어 찾기
    if (time % cores[i] === 0) {
      // 남은 작업 분배 후 마지막인 경우 코어 번호 반환
      if (--n === 0) return i + 1;
    }
  }
}

console.log(solution(6, [1, 2, 3]));
