function solution(s) {
  var answer = "";
  let check = true;

  for (let i = 0; i < s.length; i++) {
    answer += check ? s[i].toUpperCase() : s[i].toLowerCase();
    check = s[i] === " " ? true : false;
  }

  return answer;
}

solution("   3Aeople    unFollowed me  ");
solution("for Ahe last week");
solution("a b");

function solution(s) {
  var answer = s
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())
    .join(" ");

  return answer;
}
