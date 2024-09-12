/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/132266
 * 프로그래머스 lv3
 * 부대복귀
 * @param {Number} n
 * @param {Number[][]} roads
 * @param {Number[]} sources
 * @param {Number} destination
 * @returns {Number[]}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(w, v) {
    this.heap.push([w, v]);

    let c = this.heap.length - 1;
    while (c > 0) {
      const p = Math.floor((c - 1) / 2);
      if (this.heap[p][0] <= this.heap[c][0]) break;
      [this.heap[c], this.heap[p]] = [this.heap[p], this.heap[c]];
      c = p;
    }
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let p = 0;
    while (true) {
      const lc = p * 2 + 1;
      const rc = p * 2 + 2;
      let tmp = p;

      if (lc < this.heap.length && this.heap[lc][0] < this.heap[tmp][0]) {
        tmp = lc;
      }
      if (rc < this.heap.length && this.heap[rc][0] < this.heap[tmp][0]) {
        tmp = rc;
      }

      if (p === tmp) break;

      [this.heap[p], this.heap[tmp]] = [this.heap[tmp], this.heap[p]];
      p = tmp;
    }

    return min;
  }

  size() {
    return this.heap.length;
  }
}

function solution(n, roads, sources, destination) {
  const dijkstra = () => {
    const heap = new MinHeap();
    heap.insert(0, destination);

    while (heap.size()) {
      const [w, v] = heap.extractMin();
      if (D[v] < w) continue;

      for (let u of graph[v]) {
        const cost = w + 1;
        if (D[u] > cost) {
          D[u] = cost;
          heap.insert(cost, u);
        }
      }
    }
  };

  const graph = Array.from(Array(n + 1), () => []);
  for (let [f, t] of roads) {
    graph[f].push(t);
    graph[t].push(f);
  }

  const D = new Array(n + 1).fill(1e9);
  D[destination] = 0;
  dijkstra();

  return sources.map((v) => (D[v] !== 1e9 ? D[v] : -1));
}

// other - bfs

function solutionBfs(n, roads, sources, destination) {
  const graph = new Array(n + 1).fill(null).map((_) => []);
  for (let [a, b] of roads) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n + 1).fill(Infinity);

  const bfs = (destination) => {
    const q = [destination];
    visited[destination] = 0;
    while (q.length > 0) {
      const idx = q.shift();
      for (let newIdx of graph[idx]) {
        if (visited[idx] + 1 < visited[newIdx]) {
          visited[newIdx] = visited[idx] + 1;
          q.push(newIdx);
        }
      }
    }
  };

  bfs(destination);

  return sources.map((v) => {
    if (visited[v] === Infinity) return -1;
    else return visited[v];
  });
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);
console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
);
