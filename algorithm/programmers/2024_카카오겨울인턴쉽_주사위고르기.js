/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/258709
 * 프로그래머스 lv3 - 2024 KAKAO WINTER INTERNSHIP
 * 주사위 고르기
 * @param {Number[][]} dice
 * @returns {Number[]}
 */

function solution(dice) {
  const n = dice.length;
  let answer = [], max = 0;

  // 확률 비교
  const compare = (target, oppo) => {
    const tl = target.length;
    let win = 0;
    let [targetIdx, oppoIdx] = [0, 0];

    while (targetIdx < tl && oppoIdx < tl) {
      if (target[targetIdx] > oppo[oppoIdx]) {
        // 타겟이 더 크면 승수 올리고 상대의 다음 숫자 가져오기
        win++;
        oppoIdx++;
      } else {
        // 상대가 같거나 더크면 타겟의 다음 숫자 가져오기
        targetIdx++;
        // 타겟의 다음 숫자가 있다면 그 수는 상대의 이전 숫자들보다 높으므로 한번에 승수 올리기
        if (targetIdx < tl) win += oppoIdx;
      }
    }

    // 타겟의 남은 숫자들은 모든 상대의 숫자보다 크므로 한번에 승수 올리기
    if (targetIdx < tl) win += (tl - targetIdx - 1) * tl;

    // 승리 확률 갱신
    if (max < win) {
      max = win;
      return true;
    }

    return false;
  };

  // 주사위 나누기
  const pick = (i, arrA, arrB) => {
    if (arrA.length > n / 2 || arrB.length > n / 2) return;

    if (i === n) {
      const sumArrA = [];
      const sumArrB = [];

      // 각 주사위 눈의 합 계산
      const getSum = (j, sumA, sumB) => {
        if (j === n / 2) {
          sumArrA.push(sumA);
          sumArrB.push(sumB);
          return;
        }

        for (let k = 0; k < 6; k++) {
          getSum(j + 1, sumA + dice[arrA[j]][k], sumB + dice[arrB[j]][k]);
        }
      };

      getSum(0, 0, 0);

      sumArrA.sort((a, b) => a - b);
      sumArrB.sort((a, b) => a - b);

      // 승리 확률이 갱신됐다면 주사위 조합 저장
      if (compare(sumArrA, sumArrB)) answer = arrA;
      return;
    }

    pick(i + 1, arrA.concat([i]), arrB);
    pick(i + 1, arrA, arrB.concat([i]));
  };

  pick(0, [], []);

  return answer.map((v) => v + 1);
}

console.log(
  solution([
    [1, 2, 3, 4, 5, 6],
    [3, 3, 3, 3, 4, 4],
    [1, 3, 3, 4, 4, 4],
    [1, 1, 4, 4, 5, 5],
  ])
);
console.log(
  solution([
    [1, 2, 3, 4, 5, 6],
    [2, 2, 4, 4, 6, 6],
  ])
);
console.log(
  solution([
    [40, 41, 42, 43, 44, 45],
    [43, 43, 42, 42, 41, 41],
    [1, 1, 80, 80, 80, 80],
    [70, 70, 1, 1, 70, 70],
  ])
);
