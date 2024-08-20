/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87377
 * 프로그래머스 lv2 - 위클리 챌린지
 * 교점에 별 만들기
 * @param {Number[][]} line 
 * @returns {String[]}
 */

function solution(line) {
  const n = line.length;
  const pointSet = new Set();
 
  // 두 직선의 교점 찾기
  const getPoint = (arr, arr2) => {
    const [a, b, c] = arr;
    const [d, e, f] = arr2;

    // 분모 확인
    const denominator = a * e - b * d;
    // 두 직선이 평행한 경우
    if (denominator === 0) return null;

    // 분자 확인
    const xNumerator = b * f - c * e;
    const yNumerator = c * d - a * f;
    // 교점이 실수인 경우
    if (xNumerator % denominator !== 0 || yNumerator % denominator !== 0) return null;

    return [xNumerator / denominator, yNumerator / denominator];
  };

  // 별을 포함하는 최소 사각형 크기
  let [xMin, xMax] = [Infinity, -Infinity];
  let [yMin, yMax] = [Infinity, -Infinity];

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const point = getPoint(line[i], line[j]);
      if (!point) continue;

      const [x, y] = point;
      const pointKey = `${x},${y}`;

      if (!pointSet.has(pointKey)) {
        pointSet.add(pointKey);

        xMin = Math.min(xMin, x);
        xMax = Math.max(xMax, x);
        yMin = Math.min(yMin, y);
        yMax = Math.max(yMax, y);
      }
    }
  }

  const width = xMax - xMin + 1;
  const height = yMax - yMin + 1;
  const result = Array.from({ length: height }, () => Array(width).fill("."));

  for (const pointKey of pointSet) {
    const [x, y] = pointKey.split(",").map(Number);
    result[yMax - y][x - xMin] = "*";
  }

  return result.map((row) => row.join(""));
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
console.log(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ])
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
  ])
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
    [4, -1, 0],
  ])
);
