function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }

  return answer;
}

solution([-2, 3, 0, 2, -5]);
solution([-3, -2, -1, 0, 1, 2, 3]);
solution([-1, 1, -1, 1]);

// other

function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };

  combination([], 0);
  return result;
}
