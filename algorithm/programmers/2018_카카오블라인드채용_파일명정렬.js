/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17686
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [3차] 파일명 정렬
 * @param {String[]} files
 * @returns {String[]}
 */

function solution(files) {
  const reg = /(?<head>\D+)(?<number>\d+)(?<tail>.*)/;

  const makeGroups = (file) => {
    const groups = file.match(reg).groups;

    groups.head = groups.head.toLowerCase();
    groups.number = +groups.number;
    groups.tail = groups.tail.toLowerCase();

    return groups;
  };

  return files.sort((a, b) => {
    a = makeGroups(a);
    b = makeGroups(b);

    if (a.head > b.head) return 1;
    if (a.head < b.head) return -1;
    if (a.number > b.number) return 1;
    if (a.number < b.number) return -1;
    return 0;
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
