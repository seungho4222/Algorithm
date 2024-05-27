function solution(picks, minerals) {
  var answer = 1e9;

  const picksSum = picks.reduce((acc, cur) => acc + cur);
  const canMinerals = minerals.slice(0, picksSum * 5);

  // (현재 곡괭이 종류, 남은 곡괭이 배열, 광물 순서, 누적 피로도)
  const func = (pick, picks, order, result) => {
    for (let i = order; i < order + 5; i++) {
      // 피로도 계산
      if (pick === 0) result += 1;
      else if (pick === 1) {
        if (canMinerals[i] === "diamond") result += 5;
        else result += 1;
      } else {
        if (canMinerals[i] === "diamond") result += 25;
        else if (canMinerals[i] === "iron") result += 5;
        else result += 1;
      }

      // 광물 다 캐면 값 비교 후 리턴
      if (i === canMinerals.length - 1) {
        answer = Math.min(answer, result);
        return;
      }
    }

    // 다른 곡괭이 선택 후 광물 캐기
    let temp = picks;
    for (let j = 0; j < 3; j++) {
      if (temp[j]) {
        temp[j] -= 1;
        func(j, temp, order + 5, result);
        temp[j] += 1;
      }
    }
  };

  // 곡괭이 선택 후 광물 캐기 시작
  let temp = picks;
  for (let k = 0; k < 3; k++) {
    if (temp[k]) {
      temp[k] -= 1;
      func(k, temp, 0, 0);
      temp[k] += 1;
    }
  }

  return answer;
}

solution(
  [1, 3, 2],
  ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
);
solution(
  [0, 1, 1],
  ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]
);
