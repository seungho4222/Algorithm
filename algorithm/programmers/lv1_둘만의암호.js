function solution(s, skip, index) {
  var answer = "";
  const skipSet = new Set(skip);

  for (const char of s) {
    let code = char.charCodeAt();
    for (let j = 0; j < index; j++) {
      while (1) {
        code++;
        if (code > 122) code -= 26;
        if (!skipSet.has(String.fromCharCode(code))) break;
      }
    }
    answer += String.fromCharCode(code);
  }

  return answer;
}

console.log(solution("aukks", "wbqd", 5));

// 성능 최적화

function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skipSet = new Set(skip);

  // Skip 문자들을 제외한 새로운 알파벳 배열 생성
  const filteredAlphabet = [];
  for (const char of alphabet) {
    if (!skipSet.has(char)) {
      filteredAlphabet.push(char);
    }
  }

  const len = filteredAlphabet.length;

  let answer = "";
  for (const char of s) {
    const currentIdx = filteredAlphabet.indexOf(char);
    const newIdx = (currentIdx + index) % len;
    answer += filteredAlphabet[newIdx];
  }

  return answer;
}
