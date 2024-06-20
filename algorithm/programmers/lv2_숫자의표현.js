function solution(n) {
  var answer = 1;
  let sum = 1;
  let num = 1;

  for (let i = 2; i <= Math.ceil(n / 2); i++) {
    sum += i;
    while (sum > n) {
      sum -= num;
      num++;
    }
    if (sum === n) {
      answer++;
      continue;
    }
  }

  return answer;
}

solution(15);
solution(30);

// other

// 홀수인 약수 개수 구하기

function expressions(num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}

// n - (1 ~ i의 합) 을 i + 1로 나눴을 때 나머지가 0

function solution(n) {
  var answer = 0;
  let i = 0;
  while (n > 0) {
    i++;
    if (n % i === 0) answer++;
    n -= i;
  }
  return answer;
}
