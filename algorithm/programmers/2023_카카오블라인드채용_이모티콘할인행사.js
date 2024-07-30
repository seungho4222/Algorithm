/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * 2023 KAKAO BLIND RECRUITMENT
 * 이모티콘 할인행사
 * @param {[Number, Number][]} users users[i] [비율, 가입 기준 가격]
 * @param {Number[]} emoticons emoticons[i] 이모티콘 정가
 * @returns {Number[]} [이모티콘 플러스 서비스 가입 수, 이모티콘 매출액]
 */

function solution(users, emoticons) {
  var answer = [0, 0]; // [이모티콘 플러스 서비스 가입 수, 이모티콘 매출액]
  const rateArr = [10, 20, 30, 40]; // 선택 가능한 할인율
  const discount = Array.from(emoticons.length).fill(0); // 이모티콘별 할인율

  const combination = (idx) => {
    // 할인율 모두 선택 시
    if (idx === emoticons.length) {
      const tmp = [0, 0]; // answer와 비교할 임시값

      // 각 사용자에 대해 구매 여부와 서비스 가입 여부를 계산
      for (let [rate, limit] of users) {
        let pay = 0;

        // 사용자가 구매할 이모티콘의 합산 금액 계산
        for (let k = 0; k < discount.length; k++) {
          if (rate <= discount[k]) {
            pay += (emoticons[k] * (100 - discount[k])) / 100;
          }
        }

        // 구입 금액이 limit 이상이면 서비스 가입, 아니면 이모티콘 구매
        if (pay >= limit) tmp[0]++;
        else tmp[1] += pay;
      }

      // 1순위 가입자수, 2순위 매출액 비교
      if (answer[0] < tmp[0] || (answer[0] === tmp[0] && answer[1] < tmp[1]))
        answer = tmp;
      return;
    }

    // 각 이모티콘에 대해 가능한 모든 할인율을 적용하여 재귀 호출
    for (let i = 0; i < 4; i++) {
      discount[idx] = rateArr[i];
      combination(idx + 1);
    }
  };

  combination(0);

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
