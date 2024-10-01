/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 * 프로그래머스 lv2
 * 다리를 지나는 트럭
 * @param {Number} bridge_length
 * @param {Number} weight
 * @param {Number[]} truck_weights
 * @returns {Number}
 */

function solution(bridge_length, weight, truck_weights) {
  const queue = []; // queue[i] [트럭 무게, 트럭이 나가는 시간]
  let sum = 0;
  let time = bridge_length;

  for (let w of truck_weights) {
    sum += w;
    time++;

    while (queue.length === bridge_length || sum > weight) {
      const front = queue.shift();
      sum -= front[0];
      if (front[1] + bridge_length > time) time = front[1] + bridge_length;
    }

    queue.push([w, time]);
  }

  return time;
}

// other

function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
console.log(solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]));
