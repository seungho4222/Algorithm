/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862
 * 프로그래머스 lv1
 * 체육복
 * @param {Number} n
 * @param {Number[]} lost
 * @param {Number[]} reserve
 * @returns {Number}
 */

function solution(n, lost, reserve) {
  var answer = 0;

  reserve = reserve.filter((v) => {
    // lost, reserve 둘 다 속해있으면 양쪽에서 모두 제거
    if (lost.includes(v)) {
      lost.splice(lost.indexOf(v), 1);
      return false;
    }
    return true;
  });

  // 체육복 없는 학생 idx로 저장
  const memo = new Array(n + 1).fill(0);
  lost.forEach((v) => (memo[v] = 1));

  // 빌릴 수 있는지 체크
  const check = (num, idx) => {
    if (memo[num]) {
      memo[num]--;
      dfs(idx + 1);
      memo[num]++;
      return true;
    }

    return false;
  };

  // 빌려줄 수 있는 학생 수만큼 탐색
  const dfs = (i) => {
    if (i === reserve.length) {
      const lostCnt = memo.filter((v) => v).length;
      answer = Math.max(answer, n - lostCnt);
      return;
    }

    const num = reserve[i];
    let canReserve = false;

    // 앞뒤 탐색
    if (check(num - 1, i)) canReserve = true;
    if (check(num + 1, i)) canReserve = true;

    // 못 빌려주는 경우
    if (!canReserve) dfs(i + 1);
  };

  dfs(0);
  return answer;
}

// other

function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }

  for (let key in students) {
    if (students[key] >= 1) answer++;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(5, [4, 5], [3, 4]));
console.log(solution(5, [5, 3], [4, 2]));
