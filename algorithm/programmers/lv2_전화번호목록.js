/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42577
 * 프로그래머스 lv2
 * 전화번호 목록
 * @param {String[]} phone_book
 * @returns {Boolean}
 */

function solution(phone_book) {
  phone_book.sort();
  let prev = "X";

  for (let phone of phone_book) {
    if (phone.startsWith(prev)) return false;
    prev = phone;
  }

  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
