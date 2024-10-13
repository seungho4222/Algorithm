/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * 프로그래머스 lv1
 * 완주하지 못한 선수
 * @param {String[]} participant
 * @param {String[]} completion
 * @returns {String}
 */

function solution(participant, completion) {
  const map = new Map();

  for (let player of participant) {
    map.set(player, (map.get(player) ?? 0) + 1);
  }

  for (let player of completion) {
    map.set(player, map.get(player) - 1);
  }

  return Array.from(map.entries()).find((v) => v[1])[0];
}

// other
/**
 * find(callbackFn, thisArg)
 * callbackFn : 배열의 각 요소에 대해 실행할 함수
 * thisArg : callbackFn을 실행할 때 this로 사용할 값
 */

var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
