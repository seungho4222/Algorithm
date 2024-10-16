/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340210
 * 프로그래머스 lv3 - PCCP 기출문제 4번
 * 수식 복원하기
 * @param {String[]} expressions
 * @returns {String[]}
 */

function solution(expressions) {
  const completeEx = []; // 완전한 수식
  const xEx = []; // 지워진 수식
  let min = 2; // 최소진법

  // 진법에 따른 수식 계산
  const calc = (num1, operation, num2, notation) => {
    const n1 = parseInt(num1, notation);
    const n2 = parseInt(num2, notation);

    return (operation === "+" ? n1 + n2 : n1 - n2).toString(notation);
  };

  const getSplit = (num) => num.split("").map((v) => +v + 1);

  // 지워진 수식 구분, 최소진법 찾기
  for (let expression of expressions) {
    if (expression.includes("X")) xEx.push(expression);
    else completeEx.push(expression);

    const [n1, _, n2, __, n3] = expression.split(" ");
    const n3Split = n3 === "X" ? [2] : getSplit(n3);

    min = Math.max(min, ...getSplit(n1), ...getSplit(n2), ...n3Split);
  }

  // 진법 후보군
  let candidate = new Array(10 - min).fill(min).map((v, i) => v + i);

  // 완전한 수식으로 진법 찾기
  for (let i = 0; i < completeEx.length; i++) {
    const [n1, op, n2, _, n3] = completeEx[i].split(" ");
    const canNotation = new Set();

    // 현재 수식에서 가능한 진법
    for (let j = min; j <= 9; j++) {
      if (calc(n1, op, n2, j) === n3.toString(j)) canNotation.add(j);
    }

    // 후보군에서 현재 수식에서 가능한 진법만 필터링
    candidate = candidate.filter((v) => canNotation.has(v));
  }

  // 지워진 수식 확인
  return xEx.map((v) => {
    let [n1, op, n2, _, n3] = v.split(" ");

    for (let notation of candidate) {
      const result = calc(n1, op, n2, notation);
      if (isNaN(n3)) n3 = result;
      else if (n3 !== result) {
        n3 = "?";
        break;
      }
    }

    return [n1, op, n2, _, n3].join(" ");
  });
}

console.log(solution(["14 + 3 = 17", "13 - 6 = X", "51 - 5 = 44"]));
console.log(solution(["1 + 1 = 2", "1 + 3 = 4", "1 + 5 = X", "1 + 2 = X"]));
console.log(solution(["10 - 2 = X", "30 + 31 = 101", "3 + 3 = X", "33 + 33 = X"]));
console.log(solution(["2 - 1 = 1", "2 + 2 = X", "7 + 4 = X", "5 - 5 = X"]));
console.log(solution(["2 - 1 = 1", "2 + 2 = X", "7 + 4 = X", "8 + 4 = X"]));
