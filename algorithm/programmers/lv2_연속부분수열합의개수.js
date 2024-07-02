function solutionOriginal(elements) {
  const circular = elements.concat(elements);
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let num = 0;
    
    // 시작 원소 기준 길이별 부분 수열 합 계산
    for (let j = 0; j < elements.length; j++) {
      num += circular[i + j];
      set.add(num);
    }
  }

  return set.size;
}

// 슬라이딩 윈도우 기법

function solutionOptimized(elements) {
  const n = elements.length;
  const circular = elements.concat(elements);
  const set = new Set();

  // 1부터 n까지의 길이에 대해 부분 수열 합 계산
  for (let length = 1; length <= n; length++) {
    let sum = 0;

    // 첫 번째 부분 수열 합 계산
    for (let i = 0; i < length; i++) {
      sum += circular[i];
    }
    set.add(sum);

    // 슬라이딩 윈도우로 다음 부분 수열 합 계산
    for (let i = 1; i < n; i++) {
      sum = sum - circular[i - 1] + circular[i + length - 1];
      set.add(sum);
    }
  }

  return set.size;
}

// 성능 비교
const elements = Array.from({length: 1000}, () => Math.floor(Math.random() * 1000) + 1);

console.time('Original Solution');
console.log(solutionOriginal(elements));
console.timeEnd('Original Solution');

console.time('Optimized Solution');
console.log(solutionOptimized(elements));
console.timeEnd('Optimized Solution');
