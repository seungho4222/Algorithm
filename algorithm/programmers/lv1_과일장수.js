function solution(k, m, score) {
  var answer = 0;
  let sortedApple = score.toSorted((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    answer += sortedApple[i] * m;
  }

  return answer;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
