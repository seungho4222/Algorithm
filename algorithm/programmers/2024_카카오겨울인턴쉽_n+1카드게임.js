/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258707
 * 프로그래머스 lv3 - 2024 KAKAO WINTER INTERNSHIP
 * n + 1 카드게임
 * @param {Number} coin
 * @param {Number[]} cards
 * @returns {Number}
 */

function solution(coin, cards) {
  let i = 0;
  let round = 0;
  const n = cards.length;
  const draw = new Array(n + 1).fill(0);
  const tmp = new Array(n + 1).fill(0);
  const noCoinPair = [];
  const oneCoinPair = [];
  const twoCoinPair = [];

  // 첫 뽑기 카드 저장
  for (i; i < n / 3; i++) {
    if (draw[n + 1 - cards[i]]) {
      draw[n + 1 - cards[i]]--;
      noCoinPair.push([n + 1 - cards[i], cards[i]]);
    } else draw[cards[i]]++;
  }

  // 추가로 뽑은 카드 저장
  const save = (idx) => {
    if (draw[n + 1 - cards[idx]]) {
      draw[n + 1 - cards[idx]]--;
      oneCoinPair.push([n + 1 - cards[idx], cards[idx]]);
    } else if (tmp[n + 1 - cards[idx]]) {
      tmp[n + 1 - cards[idx]]--;
      twoCoinPair.push([n + 1 - cards[idx], cards[idx]]);
    } else tmp[cards[idx]]++;
  };

  // 라운드 진행
  for (i; i <= n; i += 2) {
    round++;
    if (i === n) break;

    save(i);
    save(i + 1);

    if (noCoinPair.length) {
      noCoinPair.pop();
    } else if (coin && oneCoinPair.length) {
      coin -= 1;
      oneCoinPair.pop();
    } else if (coin >= 2 && twoCoinPair.length) {
      coin -= 2;
      twoCoinPair.pop();
    } else break;
  }

  return round;
}

console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]));
console.log(solution(2, [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7]));
