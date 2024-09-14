/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/136797
 * 프로그래머스 lv3
 * 숫자 타자 대회
 * @param {String} numbers
 * @returns {Number}
 */

function solution(numbers) {
  // const dist = [
  //   [1, 7, 6, 7, 5, 4, 5, 3, 2, 3],
  //   [7, 1, 2, 4, 2, 3, 5, 4, 5, 6],
  //   [6, 2, 1, 2, 3, 2, 3, 5, 4, 5],
  //   [7, 4, 2, 1, 5, 3, 2, 6, 5, 4],
  //   [5, 2, 3, 5, 1, 2, 4, 2, 3, 5],
  //   [4, 3, 2, 3, 2, 1, 2, 3, 2, 3],
  //   [5, 5, 3, 2, 4, 2, 1, 5, 3, 2],
  //   [3, 4, 5, 6, 2, 3, 5, 1, 2, 4],
  //   [2, 5, 4, 5, 3, 2, 3, 2, 1, 2],
  //   [3, 6, 5, 4, 5, 3, 2, 4, 2, 1],
  // ];
  const getCoordinate = (num) => {
    if (num === 0) return [3, 1];
    return [Math.floor((num - 1) / 3), (num - 1) % 3];
  };

  const dist = Array.from(Array(10), () => []);
  for (let i = 0; i <= 9; i++) {
    const [fi, fj] = getCoordinate(i);
    for (let j = 0; j <= 9; j++) {
      const [ti, tj] = getCoordinate(j);
      const [diffi, diffj] = [Math.abs(fi - ti), Math.abs(fj - tj)];
      dist[i][j] = 3 * Math.min(diffi, diffj) + 2 * Math.abs(diffi - diffj) || 1;
    }
  }

  let map = new Map();
  map.set(`4,6`, 0);

  for (let n of numbers) {
    n = Number(n);
    let tmp = new Map();

    for (let [key, w] of map.entries()) {
      const [l, r] = key.split(",").map(Number);
      const [lw, rw] = [dist[l][n], dist[r][n]];

      if (r !== n) {
        const leftKey = `${n},${r}`;
        const leftCost = w + lw;
        tmp.set(leftKey, Math.min(tmp.get(leftKey) || Infinity, leftCost));
      }

      if (l !== n) {
        const rightKey = `${l},${n}`;
        const rightCost = w + rw;
        tmp.set(rightKey, Math.min(tmp.get(rightKey) || Infinity, rightCost));
      }
    }
    map = tmp;
  }

  return Math.min(...map.values());
}

// other

function solution(numbers) {
  const ws = Array.from(Array(10), () => Array(10).fill(1));
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
      ws[j][i] = ws[i][j] = getWeigth(i, j);
    }
  }

  // 이전에 누른 숫자 하나는 고정이므로 다른 숫자와 가중치만 저장
  p = 4;
  dp = [[6, 0]];
  next = new Map();

  for (n of numbers) {
    next.clear();
    n = +n;

    for (let [pp, v] of dp) {
      if (p !== n) {
        a = Math.min(next.get(p) || Infinity, v + ws[pp][n]);
        next.set(p, a);
      }
      if (pp !== n) {
        a = Math.min(next.get(pp) || Infinity, v + ws[p][n]);
        next.set(pp, a);
      }
    }

    dp = Array.from(next);
    p = n;
  }
  return Array.from(next.values()).reduce((acc, cur) => Math.min(acc, cur), Infinity);
}

const getPos = (n) => [Math.floor((n - 1) / 3), (n - 1) % 3];

const getWeigth = (n1, n2) => {
  if (n1 === n2) return 1;

  let [[x1, y1], [x2, y2]] = [n1, n2].map((v) => (v === 0 ? 11 : v)).map(getPos);
  const [dx, dy] = [x1 - x2, y1 - y2].map(Math.abs);
  return Math.max(dx, dy) + dx + dy;
};

console.log(solution("9876543210"));
