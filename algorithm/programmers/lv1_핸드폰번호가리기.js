function solution(phone_number) {
  const n = phone_number.length - 4;

  return phone_number
    .split("")
    .reduce((str, v, i) => (str += i < n ? "*" : v), "");
}

console.log(solution("01033334444"));
console.log(solution("027778888"));

// other 정규표현식

function hide_numbers(s) {
  // 숫자를 찾아 현재 위치에서 뒤쪽에 4자리 숫자가 있으면 "*"로 대체
  return s.replace(/\d(?=\d{4})/g, "*");
}

// other

function hide_numbers(s) {
  return "*".repeat(s.length - 4) + s.slice(-4);
}

const solution = (n) => [...n].fill("*", 0, n.length - 4).join("");
