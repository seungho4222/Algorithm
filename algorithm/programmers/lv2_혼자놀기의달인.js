/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131130
 * 프로그래머스 lv2
 * 혼자 놀기의 달인
 * @param {Number[]} cards
 * @returns {Number}
 */

function solution(cards) {
  const len = cards.length;
  const visited = new Array(len).fill(false);
  const group = [];

  for (let i = 0; i < len; i++) {
    let cnt = 0;
    let num = i;
    while (!visited[num]) {
      visited[num] = true;
      cnt++;
      num = cards[num] - 1;
    }

    if (cnt > 0) group.push(cnt);
  }

  if (group.length === 1) return 0;

  group.sort((a, b) => b - a);

  return group[0] * group[1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
console.log(solution([5, 4, 1, 3, 2]));
