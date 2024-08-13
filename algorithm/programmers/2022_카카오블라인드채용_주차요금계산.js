/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92341
 * 2022 KAKAO BLIND RECRUITMENT
 * 주차 요금 계산
 * @param {Number[]} fees
 * @param {String[]} records
 * @returns {Number[]}
 */

function solution(fees, records) {
  const [basicTime, basicFee] = [fees[0], fees[1]];
  const [unitTime, unitFee] = [fees[2], fees[3]];
  const map = new Map();

  // 차량별 누적 주차 시간 기록
  for (let record of records) {
    let [time, car, history] = record.split(" ");
    time = time.split(":").reduce((a, b) => +a * 60 + +b);

    if (!map.has(car)) map.set(car, 0);

    if (history === "IN") map.set(car, map.get(car) + 1439 - time);
    else map.set(car, map.get(car) - 1439 + time);
  }

  // 차량 번호 오름차순 정렬 후 주차시간만 저장
  const mapToArray = [...map].sort((a, b) => a[0] - b[0]).map((v) => v[1]);

  // 주차 요금 계산
  const calc = mapToArray.map((v) =>
    v <= basicTime
      ? basicFee
      : basicFee + Math.ceil((v - basicTime) / unitTime) * unitFee
  );

  return calc;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
