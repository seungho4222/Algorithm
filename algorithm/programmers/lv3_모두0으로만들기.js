/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76503#
 * 프로그래머스 lv3 - 월간 코드 챌린지 시즌2
 * 모두 0으로 만들기
 * @param {Number[]} a
 * @param {Number[][]} edges
 * @returns {Number}
 */

// 스택오버플로우 발생 -> 재귀함수가 아닌 stack으로 구현
// 숫자 범위 초과 -> BigInt 사용

function solution(a, edges) {
  let answer = 0n;
  const graph = Array.from({ length: a.length }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const stack = [[0, -1]];
  const visited = new Array(a.length).fill(false);

  while (stack.length) {
    const [v, parent] = stack.pop();

    if (visited[v]) {
      a[parent] += a[v];
      answer += BigInt(Math.abs(a[v]));
      continue;
    }

    stack.push([v, parent]);
    visited[v] = true;

    for (let child of graph[v]) {
      if (!visited[child]) {
        stack.push([child, v]);
      }
    }
  }

  return a[0] ? -1 : answer;
}

console.log(
  solution(
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0],
    [
      [0, 1],
      [1, 2],
    ]
  )
);
console.log(
  solution(
    [-2, 8, -5, -5, -3, 0, 5, 2],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 6],
      [2, 7],
    ]
  )
);
