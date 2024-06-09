function solution(a, b, n) {
  var answer = 0;

  while (n >= a) {
    let quotient = Math.floor(n / a) * b;
    answer += quotient;
    n = (n % a) + quotient;
  }

  return answer;
}

solution(3, 2, 20);
solution(3, 1, 20);

// other

const solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
