function solution(food) {
  var answer = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 1; j <= food[i] / 2; j++) {
      answer += String(i);
    }
  }

  let reverse = answer.split("").reverse().join("");

  return answer + "0" + reverse;
}

solution([1, 3, 4, 6]);

// other

function solution(food) {
  let res = "";

  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
