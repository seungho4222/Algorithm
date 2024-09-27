/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 * 프로그래머스 lv2 - 2019 KAKAO BLIND RECRUITMENT
 * 오픈채팅방
 * @param {String[]} record
 * @returns {String[]}
 */

function solution(record) {
  const answer = [];
  const map = new Map();

  record.forEach((entry) => {
    const [cmd, id, nickname] = entry.split(" ");

    if (cmd !== "Leave") map.set(id, nickname);

    if (cmd === "Enter") {
      answer.push([id, "님이 들어왔습니다."]);
    } else if (cmd === "Leave") {
      answer.push([id, "님이 나갔습니다."]);
    }
  });

  return answer.map(([id, action]) => map.get(id) + action);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
