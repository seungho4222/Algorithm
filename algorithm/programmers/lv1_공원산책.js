function solution(park, routes) {
  var answer = [];

  const move = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  const is_valid = (a, b) => {
    return 0 <= a && a < park.length && 0 <= b && b < park[0].length;
  };

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        answer = [i, j];
      }
    }
  }

  for (let route of routes) {
    let [op, n] = route.split(" ");
    let cnt = 0;

    while (cnt !== +n) {
      cnt++;
      let nx = answer[0] + move[op][0] * cnt;
      let ny = answer[1] + move[op][1] * cnt;

      if (!is_valid(nx, ny) || park[nx][ny] === "X") break;

      if (cnt === +n) answer = [nx, ny];
    }
  }

  return answer;
}

solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]);
