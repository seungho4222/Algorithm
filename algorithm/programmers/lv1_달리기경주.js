function solution(players, callings) {
  let obj = {};
  players.forEach((player, idx) => {
    obj[player] = idx;
  });

  for (let call of callings) {
    let idx = obj[call];
    obj[players[idx - 1]] += 1;
    obj[players[idx]] -= 1;
    [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
  }

  return players;
}

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);
