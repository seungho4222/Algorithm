/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87694
 * 프로그래머스 lv3
 * 아이템 줍기
 * @param {Number[][]} rectangle
 * @param {Number} characterX
 * @param {Number} characterY
 * @param {Number} itemX
 * @param {Number} itemY
 * @returns {Number}
 */

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const d = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  const outline = new Set();

  // ㄷ자 구역에서 경로 이탈 방지를 위해 좌표 2배 지정
  rectangle = rectangle.map((arr) => arr.map((v) => v * 2));

  // 함수: 좌표의 다각형 둘레 여부 체크
  const isOutLine = (x, y, rec) => {
    for (let [x1, y1, x2, y2] of rec) {
      if (x > x1 && x < x2 && y > y1 && y < y2) return false;
    }

    return true;
  };

  // 함수: 좌표 이동
  const move = (road) => {
    outline.delete(road);
    const [x, y] = road.split(",").map(Number);

    for (let [dx, dy] of d) {
      const newRoad = `${x + dx},${y + dy}`;

      if (outline.has(newRoad)) return newRoad;
    }
  };

  // 1. 다각형 둘레 생성
  for (let i = 0; i < rectangle.length; i++) {
    const coordinate = [];
    // 1-1. 현재 사각형과 나머지 구분
    const temp = rectangle.map((v) => [...v]);
    const [x1, y1, x2, y2] = temp.splice(i, 1)[0];

    // 1-2. 상하좌표 추가
    for (let x = x1; x <= x2; x++) {
      coordinate.push([x, y1], [x, y2]);
    }

    // 1-3. 좌우좌표 추가
    for (let y = y1 + 1; y < y2; y++) {
      coordinate.push([x1, y], [x2, y]);
    }

    // 1-4. 좌표가 다각형 둘레면 추가
    for (let [x, y] of coordinate) {
      if (isOutLine(x, y, temp)) outline.add(`${x},${y}`);
    }
  }

  // 2. 아이템 줍기
  const item = `${itemX * 2},${itemY * 2}`;
  let [road1, road2] = ["", ""];
  let dist = 1;

  // 2-1. 시작 길 구분
  outline.delete(`${characterX * 2},${characterY * 2}`);
  for (let [dx, dy] of d) {
    const pos = `${characterX * 2 + dx},${characterY * 2 + dy}`;
    if (outline.has(pos)) {
      road1 ? (road2 = pos) : (road1 = pos);
    }
  }

  // 2-2. 탐색
  while (dist++) {
    [road1, road2] = [move(road1), move(road2)];
    if (road1 === item || road2 === item) break;
  }

  return dist / 2;
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1
  )
);
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10
  )
);
console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
);
