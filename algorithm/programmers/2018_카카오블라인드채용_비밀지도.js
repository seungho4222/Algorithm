/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17681
 * 프로그래머스 lv1 - 2018 KAKAO BLIND RECRUITMENT
 * [1차] 비밀지도
 * @param {Number} n
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @returns {String[]}
 */

function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
    const row = [...binary].map((v) => (v == 1 ? "#" : " ")).join("");
    answer.push(row);
  }

  return answer;
}

// other

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    (v | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/1|0/g, (a) => (+a ? "#" : " "))
  );
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
