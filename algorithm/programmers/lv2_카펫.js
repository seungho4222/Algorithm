function solution(brown, yellow) {
  const perimeter = (brown + 4) / 2;

  for (let height = 3; height <= perimeter / 2; height++) {
    let width = perimeter - height;
    if (width * height === brown + yellow) {
      return [width, height];
    }
  }
}

solution(10, 2);
solution(8, 1);
solution(24, 24);
