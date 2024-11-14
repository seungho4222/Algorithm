/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/77886
 * 프로그래머스 lv3 - 월간 코드 챌린지 시즌2
 * 110 옮기기
 * @param {String[]} s
 * @returns {String[]}
 */

function solution(s) {
  const convertedNum = (bin) => {
    const stack = [];
    let cnt = 0;

    for (let i = 0; i < bin.length; i++) {
      stack.push(bin[i]);
      if (stack.length >= 3 && stack.slice(-3).join("") === "110") {
        stack.splice(-3);
        cnt++;
      }
    }

    // 0 앞에 두번 연속된 1은 없으므로 "110"보다 사전순에서 항상 앞선다
    // e.g. ( 0, 10, 010, 100 )
    // 0 뒤의 1들은 모두 뒤로 보낸다
    const lastZeroIdx = stack.lastIndexOf("0") + 1;

    const prev = stack.slice(0, lastZeroIdx).join("");
    const oneOneZero = "110".repeat(cnt);
    const next = stack.slice(lastZeroIdx).join("");

    return prev + oneOneZero + next;
  };

  return s.map((v) => convertedNum(v));
}

console.log(solution(["1110", "100111100", "0111111010"]));
console.log(solution(["1100111011101001"]));
