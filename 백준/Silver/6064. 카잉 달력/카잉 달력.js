const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

// 두 수의 최대공약수 반환 함수
const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : b);

const solution = (m, n, x, y) => {
  if (x == y) return x;
  if (m == n && x != y) return -1;

  const small = Math.min(m, n); // m과 n중 작은 수
  const big = Math.max(m, n); // m과 n중 큰 수
  /**
   * 카잉달력의 마지막 해: m과 n의 최소공배수
   * small을 한 사이클로 하여 마지막 해까지 반복하기
   * -> 반복차수와 small자리의 수(x || y)만 알면 big자리의 수(y || x)를 바로 구할 수 있음
   *
   * 반복 횟수 구하기: 마지막 해 / small
   * -> 마지막 해인 최소공배수는 big x small / 최대공약수 이므로
   * -> small을 나눠준 big / 최대공약수가 반복 횟수
   *
   * e.g. m = 10, n = 12, x = 3, y = 9
   * -> 마지막 해(최소공배수)는 60이므로로, 10(작은 수)을 기준으로 6번 반복
   * -> 구하는 식: 12(큰 수) / 2(최대공약수) = 6
   * -> 반복문 별 y의 값
   *   i   1   2   3   4   5
   * year  13  23  33  43  53
   *   y   1   11  9   7   5
   * -> 따라서 y = 9인 33년이 정답
   */
  const repeat = big / getGcd(m, n);
  const baseNum = m < n ? x : y; // year를 구할 숫자
  const checkNum = m < n ? y : x; // 정답 확인 숫자

  // i = 0일때는 x와 y가 항상 같아야함
  for (let i = 1; i < repeat; i++) {
    const year = small * i + baseNum;
    const a = year % big || big;
    if (a == checkNum) return year;
  }

  return -1;
};

for (let t = 0; t < T; t++) {
  const [m, n, x, y] = input[t].split(" ").map(Number);
  console.log(solution(m, n, x, y));
}
