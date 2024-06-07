function solution(t, p) {
  var answer = 0;
  let length = p.length;
  let num = Number(p);

  for (let i = 0; i <= t.length - length; i++) {
    if (Number(t.slice(i, i + length)) <= num) answer++;
  }

  return answer;
}

solution("3141592", "271");
solution("500220839878", "7");

// other

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

// 숫자로만 이루어진 문자열 앞에 "+"를 붙이면 숫자로 변환
