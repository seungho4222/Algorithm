/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258711
 * 프로그래머스 lv2 - 2024 KAKAO WINTER INTERNSHIP
 * 도넛과 막대 그래프
 * @param {Number[][]} edges
 * @returns {Number[]}
 */

function solution(edges) {
  const graph = new Map();

  // 각 정점 별 나가는 정점, 들어오는 정점 수 저장
  for (let [s, e] of edges) {
    if (!graph.has(s)) graph.set(s, { s: 0, e: 0 });
    if (!graph.has(e)) graph.set(e, { s: 0, e: 0 });

    graph.get(s).s++;
    graph.get(e).e++;
  }

  // 생성한 정점, 총 그래프 수, 도넛, 막대, 8자 그래프 수
  let [cv, n, donut, bar, eight] = [0, 0, 0, 0, 0];

  for (let [v, { s, e }] of graph) {
    // 나가는 정점 2 이상이고 들어오는 정점 없음 -> 생성한 정점
    if (s >= 2 && e === 0) {
      cv = v;
      n = s;
    }

    // 나가는 정점 없음 -> 막대 그래프
    if (s === 0) bar++;
    // 나가는 정점, 들어오는 정점 각 2 이상 -> 8자 그래프
    if (s >= 2 && e >= 2) eight++;
  }

  // 총 그래프 수에서 다른 그래프 수 빼주기 -> 도넛 그래프
  donut = n - bar - eight;

  return [cv, donut, bar, eight];
}

console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);
console.log(
  solution([
    [4, 11],
    [1, 12],
    [8, 3],
    [12, 7],
    [4, 2],
    [7, 11],
    [4, 8],
    [9, 6],
    [10, 11],
    [6, 10],
    [3, 5],
    [11, 1],
    [5, 3],
    [11, 9],
    [3, 8],
  ])
);
