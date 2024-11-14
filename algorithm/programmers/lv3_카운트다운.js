/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131129
 * 프로그래머스 lv3
 * 카운트 다운
 * @param {Number} target
 * @returns {Number[]}
 */

function solution(target) {
  /**
   * 하나의 목표점수를 달성하는 방법(불 50, 트리플 60점 중 비교)
   * 60a + b = 50a + c  ( 1 <= b, c <= 60 )
   * 위 식을 만족하는 가장 큰 a의 값은 5
   * -> 310까지는 60 과 50중 비교해야 하나 그 위는 60을 써야 다트 수를 최소화 할 수 있음
   */
  const base = target > 310 ? Math.ceil((target - 310) / 60) : 0;
  const remain = target - 60 * base;
  const dp = Array.from({ length: remain + 1 }, () => [Infinity, 0]);

  for (let i = 1; i <= remain; i++) {
    if (i <= 20 || i === 50) dp[i] = [1, 1];
    else if ((i <= 40 && i % 2 === 0) || (i <= 60 && i % 3 === 0)) dp[i] = [1, 0];
    else {
      for (let j of [1, 2, 3]) {
        for (let k = 1; k <= 20; k++) {
          if (i <= j * k) break;
          const prev = dp[i - j * k];
          const [dart, cnt] = [prev[0] + 1, prev[1] + (j === 1 ? 1 : 0)];

          if (dp[i][0] > dart || (dp[i][0] === dart && dp[i][1] < cnt)) {
            dp[i] = [dart, cnt];
          }
        }
      }

      if (i > 50) {
        const prev = dp[i - 50];
        const [dart, cnt] = [prev[0] + 1, prev[1] + 1];

        if (dp[i][0] > dart || (dp[i][0] === dart && dp[i][1] < cnt)) {
          dp[i] = [dart, cnt];
        }
      }
    }
  }

  return [dp[remain][0] + base, dp[remain][1]];
}

// other

function solution2(target) {
  let result = Array(target + 1).fill().map((_) => [100001, 0]);
  const values = new Set();
  for (let i = 1; i <= 20; i++) {
    values.add(i);
    values.add(i * 2);
    values.add(i * 3);
  }
  values.add(50);

  // 60까지 세팅
  for (let i = 1; i <= target && i <= 60; i++) {
    if (values.has(i)) {
      result[i] = [1, (i === 50 || i <= 20) ? 1 : 0]; // 싱글/불 처리
    } else {
      result[i] = [2, (i <= 40 || i > 50) ? 2 : 1]; // 두 번 던지기로 해결 가능한 점수 처리
    }
  }

  // 61부터 불 또는 트리플 사용 중 최적값 비교
  for (let i = 61; i <= target; i++) {
    if (result[i - 50][0] <= result[i - 60][0]) { // 불 사용
      result[i] = [result[i - 50][0] + 1, result[i - 50][1] + 1];
    } else { // 트리플 사용
      result[i] = [result[i - 60][0] + 1, result[i - 60][1]];
    }
  }

  return result[target];
}

console.log(solution(21));
console.log(solution(58));
console.log(solution(547));
