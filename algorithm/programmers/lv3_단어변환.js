/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43163
 * 프로그래머스 lv3
 * 단어변환
 * @param {String} begin
 * @param {String} target
 * @param {String[]} words
 * @returns {Number}
 */

function solution(begin, target, words) {
  let answer = Infinity;
  words = new Set(words);
  if (!words.has(target)) return 0;

  // 두 단어가 하나의 알파벳만 다른지 확인하는 함수
  const check = (word1, word2) => {
    let diff = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }

    return true;
  };

  // 깊이 우선 탐색
  const dfs = (cur, cnt, set) => {
    if (cur === target) {
      answer = Math.min(answer, cnt);
      return;
    }

    for (let word of set) {
      if (check(cur, word)) {
        // words 길이가 최대 50이므로 복사해서 들고다니기
        const temp = new Set(set);
        temp.delete(word);
        dfs(word, cnt + 1, temp);
      }
    }
  };

  dfs(begin, 0, words);

  return answer === Infinity ? 0 : answer;
}

// queue

function solution2(begin, target, words) {
  const targetIndex = words.indexOf(target);
  if (targetIndex === -1) return 0;

  words.push(begin);

  const check = (word1, word2) => {
    let diff = 0;

    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diff++;
        if (diff > 1) return false;
      }
    }

    return true;
  };

  const graph = Array.from({ length: words.length }, () => []);
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (check(words[i], words[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  const dist = new Array(words.length).fill(Infinity);
  const queue = [words.length - 1];
  dist[words.length - 1] = 0;

  while (queue.length) {
    const node = queue.shift();

    for (let i = 0; i < graph[node].length; i++) {
      if (dist[graph[node][i]] === Infinity) {
        dist[graph[node][i]] = dist[node] + 1;
        queue.push(graph[node][i]);
      }
    }
  }

  return dist[targetIndex] === Infinity ? 0 : dist[targetIndex];
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
