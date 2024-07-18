/**
 * 프로그래머스 lv2
 * 택배상자
 * @param {Array} order order[i] Number
 * @returns {Number}
 */

function solution(order) {
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] === i) {
      idx++;
      while (stack.length && stack[stack.length - 1] === order[idx]) {
        stack.pop();
        idx++;
      }
    } else {
      stack.push(i);
    }
  }

  return idx;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
