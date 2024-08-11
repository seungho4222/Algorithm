/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42746
 * 프로그래머스 lv2
 * 가장 큰 수
 * @param {Number[]} numbers
 * @returns {String}
 */

function solution(numbers) {
  const numToStr = numbers.map((v) => v.toString());

  numToStr.sort((a, b) => {
    const str1 = a + b;
    const str2 = b + a;
    return str2 - str1;
  });

  return numToStr[0] === "0" ? "0" : numToStr.join("");
}

// other

function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
