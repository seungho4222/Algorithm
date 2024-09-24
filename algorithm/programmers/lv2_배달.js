/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12978
 * 프로그래머스 lv2 - Summer/Winter Coding(~2018)
 * 배달
 * @param {Number} N
 * @param {Number[][]} road
 * @param {Number} K
 * @returns {Number}
 */

function solution(N, road, K) {
  // 인접 행렬
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
  for (let [s, e, w] of road) {
    graph[s][e] = Math.min(w, graph[s][e]);
    graph[e][s] = Math.min(w, graph[e][s]);
  }

  // 1번 마을 -> 각 마을 별 최단거리
  const distance = Array.from(Array(N + 1), () => Infinity);
  distance[1] = 0;

  // dfs
  const q = [[1, 0]];
  while (q.length) {
    const [v, w] = q.pop();

    for (let i = 1; i <= N; i++) {
      if (graph[v][i] === Infinity) continue;
      if (distance[i] > w + graph[v][i]) {
        distance[i] = w + graph[v][i];
        q.push([i, w + graph[v][i]]);
      }
    }
  }

  return distance.filter((v) => v <= K).length;
}

// other - 인접리스트
function solution2(N, road, K) {
  const totalDist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, dist: c });
    adj[b].push({ to: a, dist: c });
  });

  const queue = [{ to: 1, dist: 0 }];
  totalDist[1] = 0;

  while (queue.length) {
    let { to, dist } = queue.pop();

    adj[to].forEach((step) => {
      if (totalDist[step.to] > totalDist[to] + step.dist) {
        totalDist[step.to] = totalDist[to] + step.dist;
        queue.push(step);
      }
    });
  }

  return totalDist.filter((dist) => dist <= K).length;
}

// other - 플로이드 워샬
function solution3(N, road, K) {
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
  for (let [s, e, w] of road) {
    graph[s][e] = Math.min(w, graph[s][e]);
    graph[e][s] = Math.min(w, graph[e][s]);
  }
  [...Array(N + 1)].map((v, i) => (graph[i][i] = 0));

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  return graph[1].filter((v) => v <= K).length;
}

console.log(
  solution3(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution3(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
