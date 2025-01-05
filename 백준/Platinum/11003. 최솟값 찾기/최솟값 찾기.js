const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const deque = [];
let result = "";
let top = 0;

for (let i = 0; i < N; i++) {
  const current = arr[i];

  // 범위를 벗어난 인덱스 제거
  if (deque[top] < i - L + 1) top++;

  // 현재값보다 큰 덱의 요소 제거
  while (deque.length > top && arr[deque[deque.length - 1]] > current) deque.pop();

  // 현재 인덱스 추가
  deque.push(i);

  // 최소값 추가
  result += arr[deque[top]] + " ";

  // 일정 크기마다 출력
  if (i % 10000 === 0) {
    process.stdout.write(result);
    result = "";
  }
}

process.stdout.write(result);
