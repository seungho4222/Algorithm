/**
 * 프로그래머스 lv2
 * 큰 수 만들기
 * @param {String} number
 * @param {Number} k
 * @returns {String}
 */

function solution(number, k) {
  var answer = [number[0]];

  for (let i = 1; i < number.length; i++) {
    while (answer[answer.length - 1] < number[i]) {
      answer.pop();
      k--;
      if (k === 0) return answer.join("") + number.substring(i);
    }
    answer.push(number[i]);
  }

  return answer.slice(0, answer.length - k).join("");
}

console.log(solution("98765678", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
