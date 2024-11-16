/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64063
 * 프로그래머스 lv4 - 2019 카카오 개발자 겨울 인턴십
 * 호텔 방 배정
 * @param {Number} k
 * @param {Number[]} room_number
 * @returns {Number[]}
 */

function solution(k, room_number) {
  const map = new Map();

  const assign = (value) => {
    if (!map.has(value)) {
      return map.set(value, value + 1).get(value);
    }

    return map.set(value, assign(map.get(value))).get(value);
  };

  return room_number.map((v) => assign(v) - 1);
}

console.log(solution(10, [1, 3, 4, 1, 3, 1]));
