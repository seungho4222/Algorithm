/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12904
 * 프로그래머스 lv3
 * 가장 긴 팰린드롬
 * @param {string} s
 * @returns {Number}
 */

function solution(s) {
  // 문자열 전처리
  const T = "#" + s.split("").join("#") + "#";

  const n = T.length;
  const dp = new Array(n).fill(0);

  // 가장 오른쪽까지 뻗은 회문의 중심과 끝
  let [center, right] = [0, 0];

  for (let i = 0; i < n; i++) {
    // 대칭점
    const mirror = center * 2 - i;

    // 기준 회문 내부일 경우, 대칭점과 비교하여 최소길이 계산
    if (i < right) {
      dp[i] = Math.min(dp[mirror], right - i);
    }

    // 현재 회문 길이 계산
    while (
      i + dp[i] + 1 < n &&
      i - dp[i] - 1 >= 0 &&
      T[i + dp[i] + 1] === T[i - dp[i] - 1]
    )
      dp[i]++;

    // 현재 회문이 기준 회문의 범위를 벗어난 경우 업데이트
    if (i + dp[i] > right) {
      center = i;
      right = i + dp[i];
    }
  }

  return Math.max(...dp);
}

console.log(solution("abaaaa"));
console.log(solution("abcdcba"));
console.log(solution("abacde"));
