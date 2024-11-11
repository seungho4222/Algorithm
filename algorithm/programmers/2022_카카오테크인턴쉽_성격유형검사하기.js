/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * 프로그래머스 lv1 - 2022 KAKAO TECH INTERNSHIP
 * 성격 유형 검사하기
 * @param {String[]} survey
 * @param {Number[]} choices
 * @returns {String}
 */

function solution(survey, choices) {
  const kakao = new Map();
  for (let category of ["RT", "CF", "JM", "AN"]) {
    kakao.set(category, 0);
  }

  for (let i = 0; i < survey.length; i++) {
    let category = survey[i];
    let choice = choices[i];
    if (new RegExp(category[0]).test("TFMN")) {
      category = category[1] + category[0];
      choice = 8 - choice;
    }

    kakao.set(category, kakao.get(category) + choice - 4);
  }

  let answer = "";
  for (let [category, score] of kakao) {
    answer += score > 0 ? category[1] : category[0];
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
