/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/340213
 * PCCP 기출문제 1번
 * 동영상 재생기
 * @param {String} video_len 동영상 길이
 * @param {String} pos 시작 재생 위치
 * @param {String} op_start 오프닝 시작 시각
 * @param {String} op_end 오프닝 끝나는 시각
 * @param {String[]} commands commands[i] "prev" or "next"
 * @returns {String} 동영상 위치
 */

function solution(video_len, pos, op_start, op_end, commands) {
  const toSec = (time) => time.split(":").reduce((m, s) => m * 60 + +s);

  const videoLenSec = toSec(video_len);
  const opStartSec = toSec(op_start);
  const opEndSec = toSec(op_end);
  let now = toSec(pos);

  if (now >= opStartSec && now < opEndSec) now = opEndSec;

  for (let cmd of commands) {
    if (cmd === "prev") now = Math.max(0, now - 10);
    else now = Math.min(videoLenSec, now + 10);

    if (now >= opStartSec && now < opEndSec) now = opEndSec;
  }

  const min = Math.floor(now / 60) + "";
  const sec = (now % 60) + "";

  return `${min.padStart(2, "0")}:${sec.padStart(2, "0")}`;
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]));
console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]));
console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"]));
