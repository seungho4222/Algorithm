function solution(want, number, discount) {
  var answer = 0;
  let temp = [];

  for (let item of discount) {
    if (want.includes(item)) {
      temp.push(item);
      if (temp.length > 10) temp.shift();
      if (temp.length === 10) {
        let check = Array(number.length).fill(0);
        temp.map((v) => check[want.indexOf(v)]++);
        if (JSON.stringify(check) === JSON.stringify(number)) answer++;
      }
    } else {
      temp = [];
    }
  }

  return answer;
}

// 슬라이딩 윈도우 기법

function solutionOptimized(want, number, discount) {
  let answer = 0;
  let need = {};

  // 원하는 제품과 수량을 맵에 저장합니다.
  for (let i = 0; i < want.length; i++) {
    need[want[i]] = number[i];
  }

  // 현재 윈도우의 상태를 저장할 맵을 초기화합니다.
  let current = {};
  for (let item of want) {
    current[item] = 0;
  }

  // 처음 10일간의 제품 상태를 초기화합니다.
  for (let i = 0; i < 10; i++) {
    if (discount[i] in current) {
      current[discount[i]]++;
    }
  }

  // 윈도우가 필요한 제품과 수량을 만족하는지 체크하는 함수입니다.
  function isSatisfied() {
    for (let item of want) {
      if (current[item] < need[item]) {
        return false;
      }
    }
    return true;
  }

  // 첫 10일간의 상태가 만족하는지 체크합니다.
  if (isSatisfied()) {
    answer++;
  }

  // 슬라이딩 윈도우를 이동하면서 상태를 업데이트하고 체크합니다.
  for (let i = 10; i < discount.length; i++) {
    let oldItem = discount[i - 10];
    let newItem = discount[i];

    if (oldItem in current) {
      current[oldItem]--;
    }
    if (newItem in current) {
      current[newItem]++;
    }

    if (isSatisfied()) {
      answer++;
    }
  }

  return answer;
}

solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);

solution(
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ]
);
