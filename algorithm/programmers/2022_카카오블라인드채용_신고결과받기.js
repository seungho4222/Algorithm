/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * 프로그래머스 lv2 - 2022 KAKAO BLIND RECRUITMENT
 * 신고 결과 받기
 * @param {String[]} id_list
 * @param {String[]} report
 * @param {Number} k
 * @returns {Number[]}
 */

function solution(id_list, report, k) {
  const mail = new Map();
  const reportedId = new Map();

  id_list.forEach((id) => {
    mail.set(id, 0);
    reportedId.set(id, new Set());
  });

  for (let i = 0; i < report.length; i++) {
    const [f, t] = report[i].split(" ");

    reportedId.get(t).add(f);
  }

  for (let value of reportedId.values()) {
    if (value.size >= k) {
      for (let id of value) {
        mail.set(id, mail.get(id) + 1);
      }
    }
  }

  return [...mail.values()];
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
