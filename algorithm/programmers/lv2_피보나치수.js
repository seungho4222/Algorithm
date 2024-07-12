function solution(n) {
  const fibonacci = Array(n).fill(0);
  fibonacci[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }

  return fibonacci[n];
}

console.log(solution(5));
console.log(solution(1234));
