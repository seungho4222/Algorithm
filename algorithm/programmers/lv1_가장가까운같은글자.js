function solution(s) {
  var answer = [-1];

  for (let i = 1; i < s.length; i++) {
    let idx = s.lastIndexOf(s[i], i - 1);
    answer.push(idx >= 0 ? i - idx : -1);
  }

  return answer;
}

solution("banana");
