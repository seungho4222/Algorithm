/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/67258#
 * 프로그래머스 lv3 - 2020 카카오 인턴십
 * 보석 쇼핑
 * @param {String[]} gems
 * @returns {Number[]}
 */

function solution3(gems) {
  const size = new Set(gems).size;
  const map = new Map();
  const queue = [];
  let n = 1e9;
  let point = 0;
  let first = 0;

  for (let gem of gems) {
    map.set(gem, (map.get(gem) ?? 0) + 1);
    queue.push(gem);

    while (true) {
      const head = queue[0];
      if (map.get(head) > 1) {
        map.set(head, map.get(head) - 1);
        queue.shift();
        point++;
      } else break;
    }

    if (map.size === size && n > queue.length) {
      n = queue.length;
      first = point;
    }
  }

  return [first + 1, first + n];
}

// other

function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;
  const gemMap = new Map();
  let gemLengths = 1e9;
  let answer = [];

  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    const start = gemMap.values().next().value;
    
    if (gemMap.size === gemVarietyCounts && gemLengths > i - start) {
      gemLengths = i - start;
      answer = [start + 1, i + 1];
    }
  });

  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
console.log(solution(["DIA", "EM", "EM", "RUB", "DIA"]));
