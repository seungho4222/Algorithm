/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150369
 * 2023 KAKAO BLIND RECRUITMENT
 * 택배 배달과 수거하기
 * @param {Number} cap
 * @param {Number} n
 * @param {Number[]} deliveries
 * @param {Number[]} pickups
 * @returns {Number}
 */

function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let deliveryStack = 0;
  let pickupStack = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (deliveries[i] && deliveryStack) {
      const dDiff = Math.min(deliveries[i], deliveryStack);
      deliveries[i] -= dDiff;
      deliveryStack -= dDiff;
    }

    if (pickups[i] && pickupStack) {
      const pDiff = Math.min(pickups[i], pickupStack);
      pickups[i] -= pDiff;
      pickupStack -= pDiff;
    }

    if (deliveries[i] || pickups[i]) {
      const max = Math.max(deliveries[i], pickups[i]);
      const q = Math.ceil(max / cap);
      deliveryStack += q * cap - deliveries[i];
      pickupStack += q * cap - pickups[i];
      answer += q * (i + 1) * 2;
    }
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
