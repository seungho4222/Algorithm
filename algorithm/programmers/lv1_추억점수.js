function solution(name, yearning, photo) {
  var answer = [];

  for (let i = 0; i < photo.length; i++) {
    let scores = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let score = yearning[name.indexOf(photo[i][j])];
      scores += score ? score : 0;
    }
    answer.push(scores);
  }

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);

// 고수의 답

function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
