/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 * 프로그래머스 lv2
 * 전력망을 둘로 나누기
 * @param {Number} n
 * @param {Number[][]} wires
 * @returns {Number}
 */

function solution(n, wires) {
  var answer = n;
  const map = new Map();
  const visited = new Set();

  // 직접 연결된 전력망 기록
  for (let [a, b] of wires) {
    map.get(a) ?? map.set(a, []);
    map.get(b) ?? map.set(b, []);
    map.get(a).push(b);
    map.get(b).push(a);
  }

  const dfs = (root) => {
    visited.add(root);
    let cnt = 1;

    // 자식 노드들의 전력망 수 합치기
    for (let child of map.get(root)) {
      // 부모 노드 건너뛰기 -> 이미 확인한 전력망
      if (visited.has(child)) continue;
      cnt += dfs(child);
    }

    const other = n - cnt;
    answer = Math.min(answer, Math.abs(cnt - other));

    return cnt;
  };

  dfs(wires[0][0]);

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
