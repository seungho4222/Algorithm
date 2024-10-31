/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72411
 * 프로그래머스 lv2 - 2021 KAKAO BLIND RECRUITMENT
 * 메뉴 리뉴얼
 * @param {String[]} orders
 * @param {Number[]} course
 * @returns {String[]}
 */

function solution(orders, course) {
  var answer = [];
  const arr = Array.from({ length: 11 }, () => new Map());
  const maxOfCourse = Math.max(...course);

  const comb = (idx, menu, n, order) => {
    if (course.includes(n)) {
      arr[n].set(menu, (arr[n].get(menu) ?? 0) + 1);
    }

    if (n === maxOfCourse) return;

    for (let i = idx; i < order.length; i++) {
      comb(i + 1, menu + order[i], n + 1, order);
    }
  };

  for (let order of orders) {
    comb(0, "", 0, [...order].sort());
  }

  arr.forEach((map) => {
    const max = Math.max(...map.values());
    if (max < 2) return;

    for (let [key, value] of map) {
      if (value === max) answer.push(key);
    }
  });

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
