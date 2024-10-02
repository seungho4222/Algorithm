/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * 프로그래머스 lv2
 * 의상
 * @param {String[][]} clothes
 * @returns {Number}
 */

function solution(clothes) {
  const map = new Map();

  for (let [_, type] of clothes) {
    map.set(type, (map.get(type) ?? 0) + 1);
  }

  const cntOfType = [...map.values()];

  return cntOfType.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

/**
 * 종류 : 모자 a개, 상의 b개, 하의 c 개
 * 선택방법 : a, b, c, ab, ac, bc, abc
 * 방정식 : (a + 1)(b + 1)(c + 1) - 1
 * 각 종류별 안입는 경우의 수 1 추가해주기
 * 모든 종류를 안입는 경우의 수 1 빼주기
 */