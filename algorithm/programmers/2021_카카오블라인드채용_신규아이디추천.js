/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72410
 * 프로그래머스 lv1 - 2021 KAKAO BLIND RECRUITMENT
 * 신규 아이디 추천
 * @param {String} new_id
 * @returns {String}
 */

function solution(new_id) {
  // 1. 대문자 -> 소문자 치환
  new_id = new_id.replace(/[A-Z]/g, (v) => v.toLowerCase());
  // 2. 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 문자 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, (v) => "");
  // 3. 마침표(.)가 2번 이상 연속되면 하나의 마침표(.)로 치환
  new_id = new_id.replace(/\.+/g, (v) => ".");
  // 4. 마침표(.)가 처음이나 끝에 위치하면 제거
  new_id = new_id.replace(/^\.|\.$/g, (v) => "");
  // 5. 빈 문자열이면 "a" 대입
  if (!new_id) new_id = "a";
  // 6. 길이가 16자 이상이면, 첫 15개 문자만 표시 -> 끝에 위치한 마침표(.) 제거
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/g, (v) => "");
  }
  // 7. 길이가 2자 이하이면, 마지막 문자를 길이가 3이 될때까지 끝에 추가
  if (new_id.length < 3) new_id = new_id.padEnd(3, new_id[new_id.length - 1]);

  return new_id;
}

// other

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3 ----- .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5 ----- .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/\.$/, ""); // 6

  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
  // return answer.padEnd(3, answer[answer.length-1])
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
