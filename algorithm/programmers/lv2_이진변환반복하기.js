function solution(s) {
  let binary = 0;
  let zeroCnt = 0;

  while (s !== "1") {
    binary++;
    const newLength = s.split("0").join("").length;
    zeroCnt += s.length - newLength;
    s = newLength.toString(2);
  }

  return [binary, zeroCnt];
}

solution("110010101001");
solution("01110");
solution("1111111");
