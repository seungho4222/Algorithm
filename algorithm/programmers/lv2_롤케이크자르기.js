function solution(topping) {
  var answer = 0;
  const leftSet = new Set();
  const rightMap = new Map();

  for (const top of topping) {
    rightMap.set(top, (rightMap.get(top) || 0) + 1);
  }

  let leftCnt = 0;
  let rightCnt = rightMap.size;

  for (let i = 0; i < topping.length - 1; i++) {
    let top = topping[i];

    if (!leftSet.has(top)) {
      leftSet.add(top);
      leftCnt++;
    }

    rightMap.set(top, rightMap.get(top) - 1);
    if (rightMap.get(top) === 0) {
      rightCnt--;
    }

    if (leftCnt === rightCnt) answer++;
  }

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
solution([1, 2, 3, 1, 4]);
