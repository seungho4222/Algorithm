/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77884
 * 프로그래머스 lv1 - 월간 코드 챌린지 시즌2
 * 약수의 개수와 덧셈
 * @param {Number} left
 * @param {Number} right
 * @returns {Number}
 */

function solution(left, right) {
  var answer = 0;

  const divisorsCntIsEven = (num) => {
    let cnt = 0;

    for (let i = 1; i <= num ** 0.5; i++) {
      if (num % i === 0) cnt += 2;
      if (i === num ** 0.5) cnt--;
    }

    return cnt % 2 === 0;
  };

  for (let i = left; i <= right; i++) {
    answer += divisorsCntIsEven(i) ? i : -i;
  }

  return answer;
}

// other

function solution(left, right) {
  var answer = 0;
  // 제곱근이 정수이면, 약수의 개수가 홀수
  for (let i = left; i <= right; i++) {
    answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
