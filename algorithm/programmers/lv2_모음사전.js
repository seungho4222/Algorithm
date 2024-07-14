function solution(word) {
  const transform = { A: "E", E: "I", I: "O", O: "U" };
  const dict = ["A"];

  while (true) {
    let lastWord = dict[dict.length - 1];
    if (lastWord === word) return dict.length;

    if (lastWord.length < 5) {
      lastWord += "A";
      dict.push(lastWord);
    } else {
      let idx = 4;
      lastWord = lastWord.split("");
      while (true) {
        if (lastWord[idx] !== "U") {
          lastWord[idx] = transform[lastWord[idx]];
          break;
        } else {
          lastWord.pop();
          idx--;
        }
      }
      dict.push(lastWord.join(""));
    }
  }
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));

// other

function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const value = [781, 156, 31, 6, 1]; // 각 자리의 값(미리 계산된 값)

  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = vowels.indexOf(word[i]);
    result += idx * value[i] + 1;
  }

  return result;
}
