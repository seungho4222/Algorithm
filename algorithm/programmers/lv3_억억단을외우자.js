/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/138475
 * 프로그래머스 lv3
 * 억억단을 외우자
 * @param {Number} e
 * @param {Number[]} starts
 * @returns {Number[]}
 */

function solution(e, starts) {
  // 약수 개수 저장
  const dp = new Array(e + 1).fill(0);
  for (let i = 1; i <= e; i++) {
    for (let j = i; j <= e; j += i) {
      dp[j]++;
    }
  }

  // s 순서 저장 및 오름차순 정렬
  const s = starts.map((v, i) => [v, i]);
  s.sort((a, b) => a[0] - b[0]);

  // 역순으로 답 찾기
  const result = [];
  let max = 0;
  for (let i = e; i > 0; i--) {
    if (s.length === 0) break;

    max = dp[max] <= dp[i] ? i : max;

    if (s[s.length - 1][0] === i) {
      // [답, 순서] 저장
      result.push([max, s[s.length - 1][1]]);
      s.pop();
    }
  }

  // 순서 정렬 후 답만 리턴
  return result.sort((a, b) => a[1] - b[1]).map((v) => v[0]);
}

console.log(solution(8, [1, 3, 7]));
