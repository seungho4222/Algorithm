/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 * 프로그래머스 lv3
 * 네트워크
 * @param {Number} n
 * @param {Number[][]} computers
 * @returns {Number}
 */

function solution(n, computers) {
  const parent = new Array(n).fill(-1);

  const find = (x) => {
    if (parent[x] < 0) return x;
    return (parent[x] = find(parent[x]));
  };

  const union = (x, y) => {
    x = find(x);
    y = find(y);

    if (x === y) return;

    if (parent[x] <= parent[y]) {
      parent[x] += parent[y];
      parent[y] = x;
    } else {
      parent[y] += parent[x];
      parent[x] = y;
    }
  };

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j]) union(i, j);
    }
  }

  return parent.filter((v) => v < 0).length;
}

// other

function solution2(n, computers) {
  let cnt = 0;
  const visited = new Array(n).fill(false);

  const dfs = (i) => {
    if (visited[i] === true) return 0;
    else visited[i] = true;

    for (let j in computers[i]) {
      if (computers[i][j] == 1) dfs(j);
    }

    return 1;
  };

  for (let i in computers) {
    cnt += dfs(i);
  }

  return cnt;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
