/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77486
 * 프로그래머스 lv3 - 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
 * 다단계 칫솔 판매
 * @param {String[]} enroll
 * @param {String[]} referral
 * @param {String[]} seller
 * @param {Number[]} amount
 * @returns {Number[]}
 */

function solution(enroll, referral, seller, amount) {
  const parent = new Map([["center", false]]); // value : key의 상위멤버
  const cost = new Map(); // value : key가 벌어들인 수익

  for (let i = 0; i < enroll.length; i++) {
    parent.set(enroll[i], referral[i] === "-" ? "center" : referral[i]);
    cost.set(enroll[i], 0);
  }

  seller.forEach((name, idx) => {
    let income = amount[idx] * 100;

    while (parent.get(name) && income) {
      const pay = Math.floor(income / 10);
      cost.set(name, cost.get(name) + income - pay);
      [name, income] = [parent.get(name), pay];
    }
  });

  return Array.from(cost.values());
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
);
