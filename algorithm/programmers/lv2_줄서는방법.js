/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12936
 * 프로그래머스 lv2
 * 줄 서는 방법
 * @param {Number} n
 * @param {Number} k
 * @returns {Number[]}
 */

function solution(n, k) {
  /**
   * 각 자리별 하나의 수가 올 수 있는 경우의 수
   * e.g. k = 4
   * 총 경우의 수 : 4! = 24
   * 첫번째 자리에 (1, 2, 3, 4)가 오는 경우의 수 : 각 6가지 (24 / 4)
   * -> 1 ~ 6번째 경우의 수는 첫번째 자리에 (1)이 온다 / 7 ~ 12 (2), 13 ~ 18 (3), 19 ~ 24 (4)
   * 첫번째 자리가 (1)일 때, 두번째 자리에 (2, 3, 4)가 오는 경우의 수 : 각 2가지 (6 / 3)
   * -> 1 ~ 2번째 경우의 수는 두번째 자리에 (2)가 온다 / 3 ~ 4 (3), 5 ~ 6 (4)
   * cases = [6, 2, 1, 1]
   */
  const cases = [1];

  const factorial = (n) => {
    const num = n !== 1 ? n * factorial(n - 1) : 1;
    cases.unshift(num);
    return num;
  };

  factorial(n - 1);

  // 1 ~ n 배열
  const nums = new Array(n).fill().map((_, i) => i + 1);

  // k번째 각 자리 수 계산
  const answer = [];
  k-- // 0번째부터 시작

  for (let i = 0; i < n; i++) {
    // i + 1번째 자리 수 (~~연산은 양수에서 Math.floor()와 동일한 기능)
    const quotient = ~~(k / cases[i]);
    answer.push(nums.splice(quotient, 1)[0]);
    // 다음 자리 수의 순서
    k = k % cases[i];
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(4, 6));
