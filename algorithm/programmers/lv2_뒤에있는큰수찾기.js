function solution(numbers) {
  var answer = [];
  let stack = [];
  let max = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= max) {
      max = numbers[i];
      stack = [];
      stack.unshift(numbers[i]);
      answer.unshift(-1);
    } else {
      while (true) {
        if (numbers[i] < stack[0]) {
          answer.unshift(stack[0]);
          stack.unshift(numbers[i]);
          break;
        } else {
          stack.shift();
        }
      }
    }
  }

  return answer;
}

solution([2, 3, 3, 5]);
solution([9, 1, 5, 3, 6, 2]);

// other

function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);
  const stack = [0];

  for (let i = 1; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i])
      answer[stack.pop()] = numbers[i];
    stack.push(i);
  }

  return answer;
}

/*
예제) numbers 배열이 [9, 1, 5, 3, 6, 2] 일 때, 함수의 동작

1. 초기 상태:
  answer = [-1, -1, -1, -1, -1, -1]
  stack = [0]

2. i = 1 (numbers[1] = 1)
  현재 요소(1)가 스택의 마지막 요소(9)보다 작기 때문에 스택에 추가합니다.
  stack = [0, 1]

3. i = 2 (numbers[2] = 5)
  현재 요소(5)가 스택의 마지막 요소(1)보다 크기 때문에 answer[1] = 5로 업데이트하고 스택에서 인덱스 1을 제거합니다.
  현재 요소(5)가 스택의 마지막 요소(9)보다 작기 때문에 스택에 추가합니다.
  answer = [-1, 5, -1, -1, -1, -1]
  stack = [0, 2]

4. i = 3 (numbers[3] = 3)
  현재 요소(3)가 스택의 마지막 요소(5)보다 작기 때문에 스택에 추가합니다.
  stack = [0, 2, 3]

5. i = 4 (numbers[4] = 6)
  현재 요소(6)가 스택의 마지막 요소(3)보다 크기 때문에 answer[3] = 6으로 업데이트하고 스택에서 인덱스 3을 제거합니다.
  현재 요소(6)가 스택의 마지막 요소(5)보다 크기 때문에 answer[2] = 6으로 업데이트하고 스택에서 인덱스 2를 제거합니다.
  현재 요소(6)가 스택의 마지막 요소(9)보다 작기 때문에 스택에 추가합니다.
  answer = [-1, 5, 6, 6, -1, -1]
  stack = [0, 4]

6. i = 5 (numbers[5] = 2)
  현재 요소(2)가 스택의 마지막 요소(6)보다 작기 때문에 스택에 추가합니다.
  stack = [0, 4, 5]

7. 반복문 종료 후 stack에는 아직 요소가 남아있지만, 더 이상 순회할 요소가 없으므로, 스택에 남아있는 인덱스들은 -1로 남아 있습니다.

최종 answer 배열 [-1, 5, 6, 6, -1, -1]
*/
