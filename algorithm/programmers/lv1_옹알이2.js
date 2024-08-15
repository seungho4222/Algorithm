/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133499
 * 프로그래머스 lv1
 * 옹알이 2
 * @param {String[]} babbling
 * @returns {Number}
 */

function solution(babbling) {
  var answer = 0;

  // 해당 문자열로만 이루어졌는지 체크
  const regex = /^(aya|ye|woo|ma)+$/;
  // 반복되는 문자열이 있는지 체크
  const cantRegex = /(ayaaya|yeye|woowoo|mama)/;

  for (let word of babbling) {
    if (cantRegex.test(word)) continue;
    if (regex.test(word)) answer++;
  }

  return answer;
}

// other - 정규표현식 : 전방부정탐색

function solution(babbling) {
  let reg = new RegExp("^(aya(?!(aya))|ye(?!(ye))|woo(?!(woo))|ma(?!(ma)))+$");
  return babbling.reduce((acc, cur) => {
    return reg.test(cur) ? acc + 1 : acc;
  }, 0);
}

// other - 정규표현식 : 매칭된 그룹의 문자열 참조

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
