function solution(s) {
  var answer = 0;
  let x;
  let cnt = 0;

  for (let str of s) {
    if (!cnt) {
      x = str;
      answer++;
      cnt++;
    } else {
      x === str ? cnt++ : cnt--;
    }
  }

  return answer;
}

solution("banana");
solution("abracadabra");
solution("aaabbaccccabba");
