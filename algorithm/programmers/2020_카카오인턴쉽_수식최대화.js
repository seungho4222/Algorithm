function solution(expression) {
  let symbol = ["*", "-", "+"];
  var answer = 0;

  for (let i = 0; i < 3; i++) {
    // 우선순위 1번 구분
    let first_split = expression.split(symbol[i]);

    for (let j = 0; j < 3; j++) {
      if (j === i) continue;
      // 우선순위 2번 구분
      let second_split = first_split.map((item) => item.split(symbol[j]));

      // 우선순위 3번 기호로 계산
      third_calc = second_split.map((item) =>
        item.map((el) =>
          el.includes(symbol[3 - i - j]) ? String(eval(el)) : el
        )
      );

      // 우선순위 2번 기호로 계산
      second_calc = third_calc.map((item) =>
        item.length > 1 ? String(eval(item.join(symbol[j]))) : item[0]
      );

      // 우선순위 1번 기호로 계산
      first_calc = Math.abs(eval(second_calc.join(symbol[i])));

      // 결과값 비교
      answer = Math.max(answer, first_calc);
    }
  }

  return answer;
}

solution("100-200*300-500+20");
