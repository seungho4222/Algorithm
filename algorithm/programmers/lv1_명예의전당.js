function solution(k, score) {
  var answer = [];
  let honor = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) honor.push(score[i]);
    else {
      let minIdx = honor.indexOf(Math.min(...honor));
      honor[minIdx] = Math.max(honor[minIdx], score[i]);
    }

    answer.push(Math.min(...honor));
  }

  return answer;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]);
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);

// other

function solution(k, score) {
  const stack = [];

  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }

    a.push(stack[0]);
    return a;
  }, []);
}
