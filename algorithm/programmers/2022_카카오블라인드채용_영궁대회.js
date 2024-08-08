/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92342/solution_groups?language=javascript
 * 2022 KAKAO BLIND RECRUITMENT
 * 양궁대회
 * @param {Number} n
 * @param {Number[]} info
 * @returns {Number[]}
 */

function solution(n, info) {
  let answer = [];
  let maxDiff = 0;

  // 낮은 점수를 더 많이 맞힌 경우 체크
  const isBetter = (candidate, best) => {
    for (let i = 10; i >= 0; i--) {
      if (candidate[i] !== best[i]) return candidate[i] > best[i];
    }
  };

  // dfs - 10점부터 쏠 수 있는지 체크
  const shoot = (idx, left, ryanArr, diff) => {
    // 점수를 얻지 못하고 남은 화살 0점 과녁에 추가
    if (idx === 11 && left) {
      ryanArr[10] = left;
      left = 0;
    }

    // 남은 화살 없는 경우
    if (left === 0) {
      // 비교하지 못한 과녁의 어피치 점수 빼기
      for (let j = idx; j < 10; j++) {
        if (info[j]) diff -= 10 - j;
      }

      // 점수 차 갱신 || 점수 차 같으나 더 낮은 점수를 많이 맞춘 경우
      if (diff > maxDiff || (diff === maxDiff && isBetter(ryanArr, answer))) {
        maxDiff = diff;
        answer = [...ryanArr];
      }

      return;
    }

    // 점수 획득하는 경우
    if (info[idx] < left) {
      const newArr = [...ryanArr];
      newArr[idx] = info[idx] + 1;
      shoot(idx + 1, left - info[idx] - 1, newArr, diff + 10 - idx);
    }

    // 어피치가 점수 획득 || 점수 미획득
    shoot(idx + 1, left, ryanArr, info[idx] ? diff - 10 + idx : diff);
  };

  shoot(0, n, new Array(11).fill(0), 0);

  return maxDiff === 0 ? [-1] : answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
