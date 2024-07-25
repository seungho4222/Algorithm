/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/250135
 * PCCP 기출문제 3번
 * 아날로그 시계
 * @param {Number} h1 현재 시
 * @param {Number} m1 현재 분
 * @param {Number} s1 현재 초
 * @param {Number} h2 목표 시
 * @param {Number} m2 목표 분
 * @param {Number} s2 목표 초
 * @returns {Number}
 */

function solution(h1, m1, s1, h2, m2, s2) {
  var answer = 0;

  if ((h1 === 0 || h1 === 12) && m1 === 0 && s1 === 0) answer++;

  while (h1 !== h2 || m1 !== m2 || s1 !== s2) {
    // 현재 각도
    const nowS = (s1 * 360) / 60;
    const nowM = (m1 * 360) / 60 + nowS / 60;
    const nowH = ((h1 % 12) * 360) / 12 + nowM / 12;

    // 1초 증가
    s1++;
    if (s1 === 60) {
      s1 = 0;
      m1++;
      if (m1 === 60) {
        m1 = 0;
        h1++;
      }
    }

    // 알람 불가
    if (nowS > nowM && nowS > nowH) continue;

    // 정각 예외
    if ((h1 === 0 || h1 === 12) && m1 === 0 && s1 === 0) {
      answer++;
      continue;
    }

    // 1초 증가 후 각도
    const nextS = (s1 * 360) / 60;
    const nextM = (m1 * 360) / 60 + nextS / 60;
    const nextH = ((h1 % 12) * 360) / 12 + nextM / 12;

    // 겹치는 경우 계산
    if (nowS < nowM && nowS + 6 > nextM) answer++;
    if (nowS < nowH && nowS + 6 > nextH) answer++;
  }

  return answer;
}

// ---------------------------------------------------------- chatGPT

function chatGPT(h1, m1, s1, h2, m2, s2) {
  // 시작 시간과 종료 시간을 초 단위로 변환
  const start = h1 * 3600 + m1 * 60 + s1;
  const end = h2 * 3600 + m2 * 60 + s2;

  /**
   * 초침 초당           360 / 60 =     6 도 이동
   * 분침 초당      360 / 60 / 60 =   0.1 도 이동
   * 시침 초당 360 / 12 / 60 / 60 = 1/120 도 이동
   */

  // 초침과 분침의 상대적인 이동 속도 6 - 0.1 = 5.9 (도/초)
  // 초침과 분침이 겹치는 주기 (초)
  const secondMinuteOverlapPeriod = 360 / 5.9;

  // 초침과 시침의 상대적인 이동 속도 6 - 1/120 = 719/120 (도/초)
  // 초침과 시침이 겹치는 주기 (초)
  const secondHourOverlapPeriod = 360 / (719 / 120);

  // 주어진 주기 동안 겹치는 횟수 계산 함수
  function countOverlaps(start, end, period) {
    // 부동소수점 오차 최소화
    const firstOverlapAfterStart = Math.ceil((start - 1e-10) / period);
    const lastOverlapBeforeEnd = Math.floor(end / period);

    // // 첫 번째 겹침 시간이 종료 시간보다 클 경우
    if (firstOverlapAfterStart * period > end) return 0;

    return lastOverlapBeforeEnd - firstOverlapAfterStart + 1;
  }

  // 각각의 겹침 횟수 계산
  const minuteOverlaps = countOverlaps(start, end, secondMinuteOverlapPeriod);
  const hourOverlaps = countOverlaps(start, end, secondHourOverlapPeriod);

  // 0시와 12시에 모든 바늘이 겹치는 경우를 고려하여 알람 횟수 조정
  let fullOverlaps = 0;
  for (let overlap of [0, 12 * 3600]) {
    if (overlap >= start && overlap <= end) fullOverlaps++;
  }

  // 총 알람 울리는 횟수: 분침 겹침 + 시침 겹침 - 중복된 전체 겹침
  return minuteOverlaps + hourOverlaps - fullOverlaps;
}

console.log(solution(12, 0, 1, 12, 1, 1));
console.log(chatGPT(12, 0, 1, 12, 1, 1));
