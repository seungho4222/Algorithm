/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161988
 * 프로그래머스 lv3
 * 연속 펄스 부분 수열의 합
 * @param {Number[]} sequence
 * @returns {Number}
 */

function solution(sequence) {
  let max = 0, min = 0;
  let positiveSum = 0, negativeSum = 0;

  for (let i = 0; i < sequence.length; i++) {
    const num = i % 2 === 0 ? sequence[i] : -sequence[i];
    positiveSum += num;
    negativeSum += num;

    if (num >= 0) {
      max = Math.max(max, positiveSum);
      if (negativeSum > 0) negativeSum = 0;
    } else {
      min = Math.min(min, negativeSum);
      if (positiveSum < 0) positiveSum = 0;
    }
  }

  return Math.max(max, -min);
}

// 부분합
/**
 * 배열: [1, -2, 4, -3, 8, -4]
 * 누적합: [0, 1, -1*, 3, 0, 8*, 4]
 * 가장 큰 부분합: 최대누적합 - 최소누적합
 * ->  8 - (-1) = 9
 * 위 문제는 (1, -1, 1, ...) or (-1, 1, -1, ...) 두가지 경우를 모두 고려하고 있다.
 * 만약 하나의 배열에서만 부분합을 구한다면 최대누적합보다 낮은 인덱스에서 최소누적합을 찾아야 한다.
 */

function solution(sequence) {
  let m = 0, M = 0;
  let acc = m;

  for (let i = 0; i < sequence.length; i++) {
    acc = i % 2 == 1 ? acc - sequence[i] : acc + sequence[i];
    M = Math.max(M, acc);
    m = Math.min(m, acc);
  }
  return M - m;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
