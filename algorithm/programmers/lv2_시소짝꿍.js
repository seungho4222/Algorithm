function solution(weights) {
  var answer = 0;
  let calc = [1/2, 2/3, 3/4, 1, 3/2, 4/3, 2];
  let obj = {};

  for (let weight of weights) {
    for (let i = 0; i < calc.length; i++) {
      let num = weight * calc[i];
      if (Number.isInteger(num) && obj[num]) {
        answer += obj[num];
      }
    }

    obj[weight] = (obj[weight] || 0) + 1;
  }

  return answer;
}

solution([100, 180, 360, 100, 270]);

// other

function solution(weights) {
  weights.sort((a, b) => b - a);
  const dict = {};

  return weights.reduce((cnt, w) => {
    if (dict[w]) cnt += dict[w]; // 1:1
    if (dict[(w * 4) / 3]) cnt += dict[(w * 4) / 3]; // 3:4
    if (dict[(w * 3) / 2]) cnt += dict[(w * 3) / 2]; // 2:3
    if (dict[w * 2]) cnt += dict[w * 2]; // 2:4
    // 사전 갱신해주기
    dict[w] = (dict[w] || 0) + 1;
    return cnt;
  }, 0);
}
