/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42890
 * 프로그래머스 lv2 - 2019 KAKAO BLIND RECRUITMENT
 * 후보키
 * @param {String[][]} relation
 * @returns {Number}
 */

function solution(relation) {
  const row = relation.length;
  const col = relation[0].length;
  const set = new Set();

  // 최소성 체크
  const check = (columns) => {
    for (let key of set) {
      let isInclude = true;
      const arr = [...key];
      for (let i = 0; i < arr.length; i++) {
        if (!columns.includes(+arr[i])) isInclude = false;
      }
      if (isInclude) return false;
    }

    return true;
  };

  // 속성 조합
  const comb = (n, idx, visited) => {
    if (visited.length === n) {
      if (check(visited)) {
        const tmp = new Set();
        relation.forEach((tuple) => {
          const key = visited.map((i) => tuple[i]).join("");
          tmp.add(key);
        });
        if (tmp.size === row) set.add(visited.join(""));
      }

      return;
    }

    for (let i = idx; i < col; i++) {
      if (visited.includes(i)) continue;
      visited.push(i);
      comb(n, i, visited);
      visited.pop();
    }
  };

  // 속성 개수별 후보키 체크
  for (let i = 1; i <= col; i++) {
    comb(i, 0, []);
  }

  return set.size;
}

// other - 비트마스크

function solution(relation) {
  let column = relation[0].length;
  let row = relation.length;
  let count = 0;
  let bitMaskList = [];

  for (let i = 1; i < 1 << column; ++i) {
    let keySet = new Set();
    for (let j = 0; j < row; ++j) {
      let key = "";
      for (let k = 0; k < column; ++k) {
        if ((i & (1 << k)) != 0) key += relation[j][k];
      }
      keySet.add(key);
    }

    if (keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
  }

  return count;
}

function duplcateCheck(list, key) {
  let size = list.length;
  for (let i = 0; i < size; ++i) {
    if ((list[i] & key) == list[i]) return false;
  }

  list.push(key);
  return true;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
