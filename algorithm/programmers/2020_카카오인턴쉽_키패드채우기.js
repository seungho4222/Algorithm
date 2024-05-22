table = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  "*": [3, 0],
  0: [3, 1],
  "#": [3, 2],
};

function solution(numbers, hand) {
  var answer = "";

  let left = "*";
  let right = "#";

  for (const number of numbers) {
    if ([1, 4, 7].includes(number)) {
      answer += "L";
      left = number;
    } else if ([3, 6, 9].includes(number)) {
      answer += "R";
      right = number;
    } else {
      let l_dist = abs(table[number], table[left]);
      let r_dist = abs(table[number], table[right]);
      if (l_dist === r_dist) {
        if (hand === "left") {
          answer += "L";
          left = number;
        } else {
          answer += "R";
          right = number;
        }
      } else {
        if (l_dist < r_dist) {
          answer += "L";
          left = number;
        } else {
          answer += "R";
          right = number;
        }
      }
    }
  }

  return answer;
}

function abs(arr1, arr2) {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}
