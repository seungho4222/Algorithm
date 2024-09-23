/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340211
 * 프로그래머스 lv2 - PCCP 기출문제 3번
 * 충돌위험 찾기
 * @param {Number[][]} points
 * @param {Number[][]} routes
 * @returns {Number}
 */

function solution(points, routes) {
  const map = new Map();

  const record = (r, c, t) => {
    const str = `${r},${c},${t}`;
    map.set(str, map.has(str) ? true : false);
  };

  for (const route of routes) {
    let [r, c] = points[route[0] - 1];
    let sec = 0;
    record(r, c, sec);

    for (let i = 1; i < route.length; i++) {
      const [nr, nc] = points[route[i] - 1];

      while (r !== nr || c !== nc) {
        if (r !== nr) {
          r += r > nr ? -1 : 1;
        } else c += c > nc ? -1 : 1;
        record(r, c, ++sec);
      }
    }
  }

  return Array.from(map.values()).filter((v) => v).length;
}

console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [2, 4],
    ]
  )
);
console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [4, 2],
      [4, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 2],
      [2, 3],
      [2, 7],
      [6, 6],
      [5, 2],
    ],
    [
      [2, 3, 4, 5],
      [1, 3, 4, 5],
    ]
  )
);
