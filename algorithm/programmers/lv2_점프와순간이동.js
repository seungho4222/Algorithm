/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * 프로그래머스 lv2 - Summer/Winter Coding(~2018)
 * 점프와 순간이동
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      ans++;
    }
  }

  return ans;
}

// 이진수 변환
function binary1(n) {
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}

function binary2(n) {
  return n.toString(2).replace(/0/g, "").length;
}

function binary3(n) {
  return n.toString(2).match(/1/g).length;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
