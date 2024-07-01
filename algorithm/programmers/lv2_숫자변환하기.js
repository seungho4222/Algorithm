function solution(x, y, n) {
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i < y; i++) {
    if (dp[i] !== Infinity) {
      if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
      if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
      if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

solution(10, 40, 5);
solution(10, 40, 30);
solution(2, 5, 4);

// BFS

function solution(x, y, n) {
  if (x === y) return 0;

  const queue = [[x, 0]];
  const visited = new Set([x]);

  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    for (const next of [current * 2, current * 3, current + n]) {
      if (next === y) return steps + 1;
      if (next < y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}
