function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let answer = A.reduce((acc, _, idx) => acc + A[idx] * B[idx], 0);

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
