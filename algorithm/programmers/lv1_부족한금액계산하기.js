function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  return money < 0 ? -money : 0;
}

// other

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

solution(3, 20, 4);
