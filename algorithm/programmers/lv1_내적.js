function solution(a, b) {
  return a.reduce((acc, _, idx) => acc + a[idx] * b[idx], 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);
