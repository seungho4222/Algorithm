/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/135807
 * 프로그래머스 lv2
 * 숫자 카드 나누기
 * @param {Number[]} arrayA
 * @param {Number[]} arrayB
 * @returns {Number}
 */

function solution(arrayA, arrayB) {
  // 최대공약수 함수
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  // 배열별 최대공약수
  let gcdA = arrayA[0];
  let gcdB = arrayB[0];

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = gcd(gcdA, arrayA[i]);
    gcdB = gcd(gcdB, arrayB[i]);
  }

  // 함수형 코드
  // function findGCDOfArray(array) {
  //   return array.reduce((acc, curr) => gcd(acc, curr));
  // }
  // const gcdA = findGCDOfArray(arrayA);

  // 조건 충족 확인
  let answer = 0;

  if (arrayA.every((ele) => ele % gcdB !== 0)) {
    answer = Math.max(answer, gcdB);
  }

  if (arrayB.every((ele) => ele % gcdA !== 0)) {
    answer = Math.max(answer, gcdA);
  }

  return answer;
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
