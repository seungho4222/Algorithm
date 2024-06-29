function solution(sequence, k) {
  let sum = 0;
  // 오름차순이므로 뒤에서부터 확인 (짧은 부분수열 필요 => 큰값부터 찾기)
  for (let i = sequence.length - 1; i >= 0; i--) {
    sum += sequence[i];
    if (sum > k) sum -= sequence.pop();
    if (sum === k) {
      // 동일한 길이, 값에 의해 시작인덱스가 짧아 질수 있는 경우
      while (sequence[i - 1] === sequence[sequence.length - 1] && i > 0) {
        i -= 1;
        sequence.pop();
      }

      return [i, sequence.length - 1];
    }
  }
}

solution([1, 2, 3, 4, 5], 7);
solution([1, 1, 1, 2, 3, 4, 5], 5);
solution([2, 2, 2, 2, 3], 6);
