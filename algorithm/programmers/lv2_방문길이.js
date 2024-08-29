/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 * 프로그래머스 lv2 - Summer/Winter Coding(~2018)
 * 방문 길이
 * @param {String} dirs
 * @returns {Number}
 */

function solution(dirs) {
  const set = new Set();
  const isValid = (x, y) => x >= -5 && x <= 5 && y >= -5 && y <= 5;
  const move = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  let [x, y] = [0, 0];

  for (let dir of dirs) {
    const [dx, dy] = move[dir];
    const [nx, ny] = [x + dx, y + dy];

    if (isValid(nx, ny)) {
      set.add(`[${x},${y}]=>[${nx},${ny}]`);
      set.add(`[${nx},${ny}]=>[${x},${y}]`);
      [x, y] = [nx, ny];
    }
  }

  return set.size / 2;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
