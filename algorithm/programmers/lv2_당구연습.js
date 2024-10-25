/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/169198
 * 프로그래머스 lv2
 * 당구연습
 * @param {Number} m
 * @param {Number} n
 * @param {Number} startX
 * @param {Number} startY
 * @param {Number[][]} balls
 * @returns {Number[]}
 */

function solution(m, n, startX, startY, balls) {
  var answer = [];

  for (let [a, b] of balls) {
    let min = 1e9;

    if (startX !== a || startY < b) {
      min = Math.min(min, (startX - a) ** 2 + (startY + b) ** 2);
    }
    if (startY !== b || startX < a) {
      min = Math.min(min, (startX + a) ** 2 + (startY - b) ** 2);
    }
    if (startX !== a || startY > b) {
      min = Math.min(min, (startX - a) ** 2 + (2 * n - startY - b) ** 2);
    }
    if (startY !== b || startX > a) {
      min = Math.min(min, (2 * m - startX - a) ** 2 + (startY - b) ** 2);
    }

    answer.push(min);
  }

  return answer;
}

/**
 * https://school.programmers.co.kr/questions/53910
 * < 코너를 고려할 필요가 없는 이유 >
 *
 * 시작점 (a, b) ~ 도착점 (c, d)
 * 모서리 (0, 0)를 지나는 경우의 길이 : sqrt(a2 + b2) + sqrt(c2 + d2)
 * 왼쪽 벽을 지나는 경우의 길이 : sqrt((a + c)2 + (b - d)2)
 *
 * 모서리를 지나는 경우가 더 작다고 가정
 * (a + c)2 + (b - d)2 > (sqrt(a2 + b2) + sqrt(c2 + d2))2
 * a2 + b2 + c2 + d2 + 2ac - 2bd > a2 + b2 + c2 + d2 + 2sqrt(a2 + b2) * sqrt(c2 + d2)
 * ac - bd > sqrt(a2 + b2) * sqrt(c2 + d2)
 * (ac - bd)2 > (a2 + b2) * (c2 + d2)
 * (ac)2 + (bd)2 - 2abcd > (ac)2 + (ad)2 + (bc)2 + (bd)2
 * -2abcd > (ad)2 + (bc)2
 * 0 > (ad + bc)2
 *
 * 따라서, 위의 가정은 모순 -> 모서리를 지나는 경우는 최소값이 될 수 없음
 */

console.log(
  solution(10, 10, 3, 7, [
    [7, 7],
    [2, 7],
    [7, 3],
  ])
);
