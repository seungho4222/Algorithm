/**
 * 과제 진행하기
 * @param {Array} plans plans[i] [name, start, playtime]
 * @returns {Array} returns[i] = name
 */

function solution(plans) {
  // 시간 변환 및 정렬
  plans = plans
    .map(([name, start, playtime]) => {
      const [hour, minute] = start.split(":").map(Number);
      return [name, hour * 60 + minute, +playtime];
    })
    .sort((a, b) => a[1] - b[1]);

  const answer = [];
  const stack = [];
  let currentTime = 0;

  for (const [name, start, playtime] of plans) {
    while (stack.length && currentTime < start) {
      // 최근 과제
      let [pausedName, remainingTime] = stack.pop();
      // 과제 완료
      if (currentTime + remainingTime <= start) {
        currentTime += remainingTime;
        answer.push(pausedName);
        // 과제 중단 및 잔여 시간 업데이트
      } else {
        remainingTime -= start - currentTime;
        stack.push([pausedName, remainingTime]);
        break;
      }
    }
    // 과제 추가 및 현재 시간 업데이트
    stack.push([name, playtime]);
    currentTime = start;
  }
  // 최근 과제부터 완료
  while (stack.length) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
