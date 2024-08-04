/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/118667
 * 2022 KAKAO TECH INTERNSHIP
 * 두 큐 합 같게 만들기
 * @param {Number[]} queue1
 * @param {Number[]} queue2
 * @returns {Number}
 */

function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  if ((sum1 + sum2) % 2 === 1) return -1;
  if (sum1 === sum2) return 0;

  const targetNum = (sum1 + sum2) / 2;

  const queueAll = queue1.concat(queue2);

  let answer = 0;
  let start = 0;
  let end = queue1.length;

  // 투 포인터 활용
  while (start < end && end < queueAll.length) {
    if (sum1 === targetNum) return answer;

    if (sum1 > targetNum) {
      sum1 -= queueAll[start++];
    } else {
      sum1 += queueAll[end++];
    }

    answer++;
  }

  // for (let i = queue1.length; i < queueAll.length; i++) {
  //   const num = queueAll[i];

  //   while (sum1 > targetNum) {
  //     sum1 -= queueAll[start++];
  //     answer++;
  //   }

  //   if (sum1 < targetNum) {
  //     sum1 += num;
  //     answer++;
  //   }

  //   if (sum1 === targetNum) return answer;
  // }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));

// other

function solution(queue1, queue2) {
  let answer = 0;
  const max = queue1.length * 2;
  let value = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
  let [i, j] = [0, 0];
  while (value !== 0 && answer < max * 2) {
    if (value > 0) {
      const v = queue1[i];
      i++;
      value -= v;
      queue2.push(v);
    } else {
      const v = queue2[j];
      j++;
      value += v;
      queue1.push(v);
    }
    answer++;
  }
  return value !== 0 ? -1 : answer;
}
