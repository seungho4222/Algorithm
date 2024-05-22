function solution(dartResult) {
  // 다트 3개 구분하기
  let darts = ["", "", ""];
  let cnt = -1;
  let isPreNum = false;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i]) && !isPreNum) {
      cnt += 1;
      isPreNum = true;
    } else {
      isPreNum = false;
    }
    darts[cnt] += dartResult[i];
  }

  // 다트별 점수 계산
  let scores = ["", "", ""];

  for (let i = 0; i < 3; i++) {
    let dart = darts[i];

    for (let j = 0; j < dart.length; j++) {
      // 숫자 입력
      if (!isNaN(dart[j])) {
        scores[i] += dart[j];
      }

      // 보너스 계산
      if (dart[j] === "S") {
        scores[i] = Number(scores[i]);
      } else if (dart[j] === "D") {
        scores[i] = Number(scores[i]) ** 2;
      } else if (dart[j] === "T") {
        scores[i] = Number(scores[i]) ** 3;
      }

      // 옵션 계산
      if (dart[j] === "*") {
        scores[i] *= 2;
        if (i > 0) {
          scores[i - 1] *= 2;
        }
      } else if (dart[j] === "#") {
        scores[i] *= -1;
      }
    }
  }

  let answer = scores.reduce((acc, cur) => acc + cur, 0);

  return answer;
}
