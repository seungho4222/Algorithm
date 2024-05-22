function solution(a) {
  if (a.length < 3) {
    return a.length;
  }

  var answer = [];
  let left = a[0];
  let right = a[a.length - 1];

  // 왼쪽, 오른쪽 각 숫자가 더 크면 잔류 가능
  for (let i = 1; i < a.length - 1; i++) {
    left = Math.min(left, a[i - 1]);
    if (a[i] < left) {
      answer.push(a[i]);
    }
  }

  for (let i = a.length - 2; i > 0; i--) {
    right = Math.min(right, a[i + 1]);
    if (a[i] < right) {
      answer.push(a[i]);
    }
  }

  return [...new Set(answer)].length + 2;
}
