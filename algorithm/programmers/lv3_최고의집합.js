/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12938
 * 프로그래머스 lv3
 * 최고의 집합
 * @param {Number} n
 * @param {Number} s
 * @returns {Number[]}
 */

function solution(n, s) {
  if (n > s) return [-1];

  const common = ~~(s / n);
  const multiSet = new Array(n).fill(common);
  s -= common * n;

  let rear = n - 1;
  while (s--) {
    multiSet[rear--] += 1;
  }

  return multiSet;
}

// short cording

const bestSet = (n, s) =>
  n > s
    ? [-1]
    : Array.apply(null, Array(n)).map((_, i) =>
        i < n - (s % n) ? parseInt(s / n) : parseInt(s / n) + 1
      );

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
