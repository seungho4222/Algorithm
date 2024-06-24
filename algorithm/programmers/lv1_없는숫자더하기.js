function solution(numbers) {
  var answer = 45;

  for (let num of numbers) {
    answer -= num;
  }

  return answer;
}

function solution(numbers) {
  return numbers.reduce((acc, cur) => acc - cur, 45);
}
