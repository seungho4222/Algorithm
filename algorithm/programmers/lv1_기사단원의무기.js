function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor_cnt = 0;
    // 제곱근까지 검사
    for (let j = 1; j <= Math.sqrt(i); j++) {
      // 중간값 처리
      if (i % j === 0) divisor_cnt += Math.pow(j, 2) === i ? 1 : 2;
    }
    answer += divisor_cnt > limit ? power : divisor_cnt;
  }

  return answer;
}

solution(5, 3, 2);
solution(10, 3, 2);
