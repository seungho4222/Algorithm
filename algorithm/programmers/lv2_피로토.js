/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 * 프로그래머스 lv2
 * 피로도
 * @param {Number} k
 * @param {Number[][]} dungeons
 * @returns {Number}
 */

function solution(k, dungeons) {
  const len = dungeons.length;
  const visited = new Array(len).fill(false);
  var answer = 0;

  const go = (health, cnt) => {
    for (let i = 0; i < len; i++) {
      if (!visited[i] && dungeons[i][0] <= health) {
        visited[i] = true;
        go(health - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }

    answer = Math.max(answer, cnt);
  };

  go(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
