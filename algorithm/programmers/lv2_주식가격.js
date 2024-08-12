/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 * 프로그래머스 lv2
 * 주식가격
 * @param {Number[]} prices
 * @returns {Number[]}
 */

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let check = true;
    // 주식가격 하락할 때까지 확인
    for (let j = i + 1; j < n; j++) {
      if (prices[i] > prices[j]) {
        answer[i] = j - i;
        check = false;
        break;
      }
    }
    // 하락하지 않는 경우
    if (check) answer[i] = n - i - 1;
  }

  return answer;
}

// stack

function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    // 스택은 항상 오름차순 정렬
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      // 주식가격 하락 시 기간 기록
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  // 하락하지 않는 경우
  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - j - 1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
console.log(solution([1, 3, 2, 2, 2]));
