function solution(s) {
  var answer = "";

  let split = s.split(" ").map((i) => Number(i));

  answer = `${Math.min(...split)} ${Math.max(...split)}`;

  return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");

// 문자열도 비교 가능

function solution(s) {
  var answer = s.split(" ");

  return Math.min(...answer) + " " + Math.max(...answer);
}
