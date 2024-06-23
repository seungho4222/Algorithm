function solution(wallpaper) {
  let minRow = 50,
    maxRow = 0,
    minCol = 50,
    maxCol = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        if (minRow > i) minRow = i;
        if (maxRow < i) maxRow = i;
        if (minCol > j) minCol = j;
        if (maxCol < j) maxCol = j;
      }
    }
  }

  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

solution([".#...", "..#..", "...#."])
solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])
solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])
solution(["..", "#."])