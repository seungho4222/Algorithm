function solution(n, m, section) {
  var answer = 0;
  let paint = 0;

  for (let part of section) {
    if (paint < part) {
      paint = part + m - 1;
      answer++;
    } else continue;
  }

  return answer;
}

solution(8, 4, [2, 3, 6]);
solution(8, 2, [1, 4, 8]);
solution(4, 1, [1, 2, 3, 4]);
