/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12981
 * 프로그래머스 lv2 - Summer/Winter Coding(~2018)
 * 영어 끝말잇기
 * @param {Number} n
 * @param {String[]} words
 * @returns {number[]}
 */

function solution(n, words) {
  const set = new Set();
  set.add(words[0]);
  let end = words[0][words[0].length - 1];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (end === word[0] && !set.has(word)) {
      set.add(word);
      end = word[word.length - 1];
    } else return [(i % n) + 1, Math.floor(i / n + 1)];
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
