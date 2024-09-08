/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/150370
 * 2023 KAKAO BLIND RECRUITMENT
 * 개인정보 수집 유효기간
 * @param {String} today "YYYY.MM.DD"
 * @param {String[]} terms terms[i] "약관종류 유효기간"
 * @param {String[]} privacies privacies[i] "YYYY.MM.DD 약관종류"
 * @returns {Number[]}
 */

function solution(today, terms, privacies) {
  const result = [];
  const map = new Map();

  terms.forEach((term) => {
    const v = term.split(" ");
    map.set(v[0], +v[1]);
  });

  today = new Date(today);

  for (let i = 1; i <= privacies.length; i++) {
    const info = privacies[i - 1].split(" ");
    const date = new Date(info[0]);
    date.setMonth(date.getMonth() + map.get(info[1]));

    if (today >= date) result.push(i);
  }

  return result;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
