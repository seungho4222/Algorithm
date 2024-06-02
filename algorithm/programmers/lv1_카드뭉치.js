function solution(cards1, cards2, goal) {
  for (let card of goal) {
    if (cards1 && cards1[0] === card) {
      cards1.shift();
    } else if (cards2 && cards2[0] === card) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
