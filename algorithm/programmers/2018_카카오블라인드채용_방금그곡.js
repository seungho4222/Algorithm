/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17683
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [3차] 방금그곡
 * @param {String} m
 * @param {String[]} musicinfos
 * @returns {String}
 */

function solution(m, musicinfos) {
  let answer = "";
  let playingTime = 0;

  // 시간을 분 단위로 변환
  const getTime = (s, e) => {
    [s, e] = [s.split(":"), e.split(":")];
    return +e[0] * 60 + +e[1] - +s[0] * 60 - +s[1];
    // return (new Date(`1970-01-01 ${e}:00`) - new Date(`1970-01-01 ${s}:00`)) / 60000;
  };

  // 악보에서 샾 구분하기
  const getScore = (score) =>
    score.replace(/[A-Z]#/g, (v) => v[0].toLowerCase());

  // 음악 찾기
  const myScore = getScore(m);

  for (let info of musicinfos) {
    const [s, e, title, score] = info.split(",");
    const time = getTime(s, e);
    const bcScore = getScore(score);
    const n = bcScore.length;
    // 악보 반복
    const quotient = ~~(time / n);
    const remain = time % n;
    let repeatScore = bcScore.repeat(quotient);
    repeatScore += bcScore.slice(0, remain);

    // 멜로디 찾기
    if (new RegExp(myScore).test(repeatScore) && playingTime < time) {
      playingTime = time;
      answer = title;
    }
  }

  return answer || "(None)";
}

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
