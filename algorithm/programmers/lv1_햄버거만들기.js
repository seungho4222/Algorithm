/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502
 * 프로그래머스 lv1
 * 햄버거 만들기
 * @param {Number[]} ingredient
 * @returns {Number}
 */

function solution(ingredient) {
  var answer = 0;
  const stack = [];

  for (let num of ingredient) {
    stack.push(num);

    if (
      stack.length > 3 &&
      stack.slice(stack.length - 4, stack.length).join("") === "1231"
    ) {
      answer++;
      stack.splice(stack.length - 4, 4);
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
