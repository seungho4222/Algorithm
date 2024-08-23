/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * 프로그래머스 lv1 - 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
 * 로또의 최고 순위와 최저 순위
 * @param {Number[]} lottos
 * @param {Number[]} win_nums
 * @returns {Number[]}
 */

function solution(lottos, win_nums) {
  // const rank = [6, 6, 5, 4, 3, 2, 1]  순위 테이블 미리 생성해서 index로 접근
  let hit = 0;
  let zero = 0;

  for (let num of lottos) {
    if (win_nums.includes(num)) hit++;
    if (num === 0) zero++;
  }

  const getRank = (hitNums) => (hitNums ? 7 - hitNums : 6);

  return [getRank(hit + zero), getRank(hit)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [45, 4, 35, 20, 3, 9]));
