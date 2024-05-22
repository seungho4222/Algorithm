let table = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function solution(s) {
  var answer = "";

  let save = "";
  for (const item of s) {
    if (isNaN(item)) {
      save += item;
    } else {
      answer += item;
      continue;
    }

    if (save in table) {
      answer += table[save];
      save = "";
    }
  }

  return Number(answer);
}

// 고수의 답

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
