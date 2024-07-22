/**
 * 프로그래머스 lv2
 * 다음 큰 숫자
 * @param {Number} n
 * @returns {Number}
 */

function solution(n) {
  const count = n.toString(2).split("").filter(v => v === '1').length;
  
  while (n++) {
    const check = n.toString(2).split("").filter(v => v === '1').length;
    if (count === check) return n;
  }
}

console.log(solution(78));
console.log(solution(15));

// 정규표현식

function solution(n) {
  const countOnes = (num) => num.toString(2).match(/1/g).length;
  
  const targetCount = countOnes(n);
  
  let nextNumber = n + 1;
  
  while (countOnes(nextNumber) !== targetCount) {
    nextNumber++;
  }
  
  return nextNumber;
}
