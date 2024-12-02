/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118669
 * 프로그래머스 lv3 - 2022 KAKAO TECH INTERNSHIP
 * 등산코스 정하기
 * @param {Number} n
 * @param {Number[][]} paths
 * @param {Number[]} gates
 * @param {Number[]} summits
 * @returns {Number[]}
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  insert(value) {
    this.heap.push(value);

    let idx = this.size() - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentValue = this.heap[parentIdx];

      if (value[1] < parentValue[1]) {
        this.heap[idx] = parentValue;
        idx = parentIdx;
      } else break;
    }

    this.heap[idx] = value;
  }

  remove() {
    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      let idx = 0;
      let length = this.size();

      while (idx * 2 + 1 < length) {
        let smaller = idx * 2 + 1;
        const right = idx * 2 + 2;

        if (right < length && this.heap[right][1] < this.heap[smaller][1]) {
          smaller = right;
        }

        if (this.heap[smaller][1] < last[1]) {
          this.heap[idx] = this.heap[smaller];
          idx = smaller;
        } else break;
      }

      this.heap[idx] = last;
    }

    return root;
  }
}

function solution(n, paths, gates, summits) {
  const gateSet = new Set(gates);
  const summitSet = new Set(summits);
  const graph = Array.from({ length: n + 1 }, () => []);

  // 출입구는 나가는 것만, 산봉우리는 들어오는 것만, 나머지는 양방향 저장
  for (let [f, t, w] of paths) {
    if (gateSet.has(f) || summitSet.has(t)) {
      graph[f].push([t, w]);
    } else if (gateSet.has(t) || summitSet.has(f)) {
      graph[t].push([f, w]);
    } else {
      graph[f].push([t, w]);
      graph[t].push([f, w]);
    }
  }

  // 다익스트라
  const intensity = new Array(n + 1).fill(Infinity);
  const heap = new Heap();

  for (let gate of gates) {
    intensity[gate] = 0;
    heap.insert([gate, 0]);
  }

  while (!heap.isEmpty()) {
    const [v, w] = heap.remove();

    if (intensity[v] < w) continue;

    for (let [uv, uw] of graph[v]) {
      if (intensity[uv] > Math.max(intensity[v], uw)) {
        intensity[uv] = Math.max(intensity[v], uw);
        heap.insert([uv, uw]);
      }
    }
  }

  // 가중치 작은값 우선, 낮은 산봉우리 번호 출력
  let [summit, min] = [0, Infinity];
  summits.sort((a, b) => a - b);

  for (let s of summits) {
    if (min > intensity[s]) {
      min = intensity[s];
      summit = s;
    }
  }

  return [summit, min];
}

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
);
console.log(
  solution(
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4]
  )
);
console.log(
  solution(
    7,
    [
      [1, 2, 5],
      [1, 4, 1],
      [2, 3, 1],
      [2, 6, 7],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
    ],
    [3, 7],
    [1, 5]
  )
);
console.log(
  solution(
    5,
    [
      [1, 3, 10],
      [1, 4, 20],
      [2, 3, 4],
      [2, 4, 6],
      [3, 5, 20],
      [4, 5, 6],
    ],
    [1, 2],
    [5]
  )
);
