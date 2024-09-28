/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42860
 * 프로그래머스 lv2
 * 조이스틱
 * @param {String} name
 * @returns {Number}
 */

function solution(name) {
  const n = name.length;
  let answer = Infinity;

  const diffCode = [...name].map((v) => {
    const code = v.charCodeAt();
    return Math.min(code - 65, 91 - code);
  });

  const dfs = (now, cnt, visited) => {
    cnt += diffCode[now];
    visited[now] = true;

    if (visited.every((v) => v)) {
      answer = Math.min(answer, cnt);
      return;
    }

    let seq = diffCode.slice(now + 1).concat(diffCode.slice(0, now));
    for (let i = 1; i < n; i++) {
      const idx = (now + i) % n;
      if (seq[i - 1] && !visited[idx]) {
        dfs(idx, cnt + i, visited);
        visited[idx] = false;
        break;
      }
    }

    seq = seq.reverse();
    for (let j = 1; j < n; j++) {
      const diff = now - j;
      const idx = diff >= 0 ? diff : n + diff;
      if (seq[j - 1] && !visited[idx]) {
        dfs(idx, cnt + j, visited);
        visited[idx] = false;
        break;
      }
    }
  };

  const visited = Array.from(Array(n), (_, i) => !diffCode[i]);

  dfs(0, 0, visited);

  return answer;
}

// 최적화

function solution(name) {
  const n = name.length;
  let move = n - 1; // 좌우 이동 기본값 (일직선으로 끝까지 가는 경우)
  let answer = 0;

  // 각 문자에 대해 상하 조작 횟수 계산
  for (let i = 0; i < n; i++) {
    // 상하 조작 횟수 계산 (A-Z 간 최소값)
    const charMove = Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
    answer += charMove;

    // 좌우 이동 최적화: 연속된 'A' 구간을 넘어갈 수 있는지 계산
    let next = i + 1;
    while (next < n && name[next] === "A") {
      next++; // 연속된 'A'가 있는 구간 찾기
    }

    // 현재 위치까지 가고, 다시 돌아와서 연속된 'A' 이후로 가는 거리와 비교
    // 정방향 왕복 + 역방향 or 정방향 + 역방향 왕복
    move = Math.min(move, i + n - next + Math.min(i, n - next));
  }

  return answer + move;
}

console.log(solution("JEROEN"));
console.log(solution("BABAAAB"));
