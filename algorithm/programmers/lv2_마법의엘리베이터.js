/**
 * 프로그래머스 lv2
 * 마법의 엘리베이터
 * @param {Number} storey
 * @returns {Number}
 */

function solution(storey) {
  var answer = 0;
  storey = String(storey).split("").map(v => Number(v));

  while (storey.length) {
    let num = storey.pop();

    if (!storey.length) {
      answer += Math.min(num, 11 - num);
      break;
    }

    if (num < 5) answer += num;
    else if (num === 5 && storey[storey.length - 1] < 5) answer += 5;
    else {
      answer += 10 - num;
      storey[storey.length - 1]++;
    }
  }

  return answer;
}

// other

function solutionRecur(storey) {
  if (storey < 5) return storey;
  const r = storey % 10;
  const m = (storey - r) / 10;
  return Math.min(r + solution(m), 10 - r + solution(m + 1));
}

console.time("original")
console.log(solution(123456789));
console.timeEnd("original")

console.time("recursion")
console.log(solutionRecur(123456789));
console.timeEnd("recursion")
