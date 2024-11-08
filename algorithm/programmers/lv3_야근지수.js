/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12927
 *
 * @param {Number} n
 * @param {Number[]} works
 * @returns {Number}
 */

function solution(n, works) {
  // 내림차순 정렬
  works.sort((a, b) => b - a);
  // 다음 작업량과의 차이값 저장
  const diffs = works.map((v, i) => v - works[i + 1]);
  // 마지막값은 작업량 저장 (최소 작업량)
  diffs[diffs.length - 1] = works.at(-1);

  /**
   * e.g. n = 6, works = [8, 5, 3, 3, 2]
   * diffs = [3, 2, 0, 1, 2]
   * 각 작업량은 인덱스별로 누적해서 빼줘야 함
   * 첫번째 diff 3 처리 (0번 인덱스) -> n = 3, works = [5, 5, 3, 3, 2]
   * 두번째 diff 2 처리 (0번, 1번 인덱스) -> n = 0, works = [3, 4, 3, 3, 2]
   *   => 해당 인덱스의 작업량만 빼주는 것이 아니라 지나온 인덱스 값 모두 빼주어야 함
   * ! 최댓값을 최소화시키는게 관건이다
   */

  let idx; // 퇴근시 작업량 인덱스
  let value; // idx까지 작업량
  let mod; // 1만큼 더빼줄 값 개수

  for (idx = 0; idx < diffs.length; idx++) {
    if (diffs[idx]) {
      // 지나온 작업량에서 전부 빼줄 수 있는지 비교
      const diffCnt = ~~(n / (idx + 1)) - diffs[idx];

      if (diffCnt >= 0) {
        n -= (idx + 1) * diffs[idx];
      } else {
        value = works[idx] - ~~(n / (idx + 1));
        mod = n % (idx + 1);
        n = 0;
        break;
      }
    }
  }

  return n
    ? 0
    : works.reduce((a, c, i) => {
        if (i <= idx) {
          c = value;
          if (i < mod) c--;
        }

        return a + c ** 2;
      }, 0);
}

// other - 시간복잡도 고려 필요

const noOvertime = (no, works) => {
  while (no > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    no--;
  }

  return works.map((a) => a * a).reduce((a, b) => a + b);
};

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
console.log(solution(6, [8, 5, 3, 3, 2]));
console.log(solution(7, [10, 5, 7]));
