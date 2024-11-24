/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77885
 * 프로그래머스 lv2 - 월간 코드 챌린지 시즌2
 * 2개 이하로 다른 비트
 * @param {Number[]} numbers
 * @returns {Number[]}
 */

function solution(numbers) {
  const f = (num) => {
    let big = BigInt(num);
    let temp = big;
    let cnt = 0n;

    while (temp % 2n !== 0n) {
      temp >>= 1n;
      cnt++;
    }

    // 뒤에서 처음 발견한 0을 1로 변경 -> 그 뒤의 1을 0으로 변경
    big |= 1n << cnt;
    big &= ~(1n << (cnt - 1n));

    return big;
  };

  return numbers.map(f);
}

console.log(solution([2, 7]));
