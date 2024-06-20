function solution(k, tangerine) {
  var answer = 0;
  let obj = {};

  for (let size of tangerine) {
    obj[size] = (obj[size] || 0) + 1;
  }

  const sortedValues = Object.values(obj).sort((a, b) => b - a);

  for (let value of sortedValues) {
    k -= value;
    answer++;
    if (k <= 0) break;
  }

  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
