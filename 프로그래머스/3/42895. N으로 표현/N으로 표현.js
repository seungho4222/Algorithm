function solution(N, number) {
  if (N == number) return 1;

  // N으로만 이루어진 숫자인지 확인하는 정규표현식
  const reg = new RegExp(`^${N}+$`);

  // set[i] = N을 i만큼 사용해서 만들 수 있는 수의 집합 (최대 8번 사용)
  const set = Array.from({ length: 9 }, () => new Set());
  // 1개로 만들 수 있는 수는 N 한개 뿐
  set[1].add(N);

  // 최대 8번 사용
  for (let i = 2; i <= 8; i++) {
    // i를 만들 수 있는 수의 조합
    for (let j = 1; j < i; j++) {
      const set1 = set[j];
      const set2 = set[i - j];

      for (let n1 of set1) {
        for (let n2 of set2) {
          // 글자합치기
          if (reg.test(n1) && reg.test(n2)) {
            const string = String(n1) + String(n2);
            set[i].add(+string);
          }

          // 더하기
          set[i].add(n1 + n2);

          // 빼기
          set[i].add(n1 - n2);

          // 곱하기
          set[i].add(n1 * n2);

          // 나누기 (제수는 0이 될 수 없음, 나머지 버리기)
          if (n2) set[i].add(~~(n1 / n2));
        }
      }
    }

    if (set[i].has(number)) return i;
  }

  return -1;
}