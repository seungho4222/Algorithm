/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340212
 * 프로그래머스 lv2 - PCCP 기출문제 2번
 * 퍼즐 게임 챌린지
 * @param {Number[]} diffs
 * @param {Number[]} times
 * @param {Number} limit
 * @returns {Number}
 */

function solution(diffs, times, limit) {
  // 퍼즐 별 해결시간만 차감 -> 이후 틀린시간만 체크
  limit -= times.reduce((acc, cur) => acc + cur);

  // 모든 퍼즐 해결 가능 여부 체크
  const check = (level, time) => {
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] > level) {
        time += (diffs[i] - level) * (times[i - 1] + times[i]);
      }
    }

    return time <= limit;
  };

  // 이분탐색
  let [l, r] = [1, 1];
  diffs.forEach((v) => (r = Math.max(r, v)));
  /**
    r = Math.max(...diffs) 사용 시 런타임 에러
    -> 스프레드 연산자는 호출 스택에 배열을 펼침
    -> 최대 30만 길이의 경우, 약 10000~20000 크기를 갖는 자바스크립트의 호출 스택 범위 초과
   */

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (check(m, 0)) r = m;
    else l = m + 1;
  }

  return l;
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));
console.log(
  solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012)
);
