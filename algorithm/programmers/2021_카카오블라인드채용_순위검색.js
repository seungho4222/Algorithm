/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72412
 * 프로그래머스 lv2 - 2021 KAKAO BLIND RECRUITMENT
 * 순위 검색
 * @param {String[]} info
 * @param {String[]} query
 * @returns {Number[]}
 */

class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = new Map();
    this.scores = [];
  }
}

class Trie {
  constructor() {
    this.node = new TrieNode(null);
  }

  init() {
    const infoTitle = [
      ["java", "python", "cpp", "-"],
      ["backend", "frontend", "-"],
      ["junior", "senior", "-"],
      ["pizza", "chicken", "-"],
    ];

    const initDepth = (node, depth) => {
      if (depth === 4) return;

      for (const value of infoTitle[depth]) {
        node.children.set(value, new TrieNode(value));
        initDepth(node.children.get(value), depth + 1);
      }
    };

    initDepth(this.node, 0);
  }

  insert(query) {
    query = query.split(" ");
    let score = +query.pop();

    const insertDepth = (node, depth) => {
      if (depth === 4) {
        node.scores.push(score);
        return;
      }

      insertDepth(node.children.get(query[depth]), depth + 1);
      insertDepth(node.children.get("-"), depth + 1);
    };

    insertDepth(this.node, 0);
  }
}

function solution(info, query) {
  var answer = [];

  const trie = new Trie();
  trie.init();

  for (let i of info) {
    trie.insert(i);
  }

  // 모든 쿼리의 점수값 정렬
  const sortDepth = (node, depth) => {
    if (depth === 4) {
      node.scores.sort((a, b) => b - a);
      return;
    }

    for (let key of node.children.keys()) {
      sortDepth(node.children.get(key), depth + 1);
    }
  };

  sortDepth(trie.node, 0);

  // 이진탐색
  const binarySearch = (arr, score) => {
    let [l, r] = [0, arr.length - 1];

    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] >= score) l = m + 1;
      else r = m;
    }

    return arr[l] >= score ? l + 1 : l;
  };

  for (let q of query) {
    q = q.split(" ").filter((v) => v !== "and");
    const score = +q.pop();

    let checkNode = trie.node;
    for (let value of q) {
      checkNode = checkNode.children.get(value);
    }

    const cnt = binarySearch(checkNode.scores, score);
    answer.push(cnt);
  }

  return answer;
}

// other
// https://github.com/yuneg11/Programmers-Solutions/tree/master/solutions/72412%20-%20순위%20검색

function bisect_gt(a, x) {
  let [lo, hi] = [0, a.length];

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }

  return a.length - lo;
}

function solution2(info, query) {
  // 000, 001, 010, 100 중 하나의 비트로 표현 (0, 1, 2, 4)
  const table = { c: 3, j: 5, p: 6, b: 6, f: 5, s: 6, "-": 0 };
  const conv = (l, t) => [
    l.slice(0, -1).reduce((a, k) => (a << 3) + t(table[k[0]]), 0),
    Number(l[l.length - 1]),
  ];

  // 같은 정보를 info와 query에서 반대로 저장 -> 각 배열의 같은 정보(또는 "-")를 & 연산 하면 0이 됨
  info = info.map((s) => conv(s.split(" "), (x) => 7 - x));
  query = query.map((s) => conv(s.split(" ").filter((c) => c != "and"), (x) => x));

  const map = new Map();
  // k: 지원서 정보를 모두 포함하는 비트로 계산한 값, v: 점수
  for (const [k, v] of info) {
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(v);
  }

  // 해당 조건의 점수목록 오름차순 정렬
  const dict = Array.from(map.entries()).map(([k, l]) => [k, l.sort((a, b) => a - b)]);

  // k & q : k라는 조건이 query(q) 조건을 만족하면 0을 반환 -> 이진탐색 함수 실행
  return query.map(([q, v]) =>
    dict.reduce((a, [k, l]) => a + (k & q ? 0 : bisect_gt(l, v)), 0)
  );
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
