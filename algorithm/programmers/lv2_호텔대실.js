function solution(book_time) {
  // 문자열 시각 -> 분 기준 숫자로 변경 ("15:00" -> 900)
  let times = book_time.map((interval) =>
    interval.map((time) => {
      let [hour, minute] = time.split(":");
      return +hour * 60 + +minute;
    })
  );
  // 시작 시각 기준 정렬
  times.sort((a, b) => a[0] - b[0]);
  // 사용 방 설정
  let answer = [times[0][1]];

  for (let i = 1; i < times.length; i++) {
    let [s, e] = times[i];
    // 사용방 이어서 사용 or 추가 사용
    let check = true;
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] + 10 <= s) {
        answer[j] = e;
        check = false;
        break;
      }
    }

    if (check) answer.push(e);
  }
  // 사용방 개수 반환
  return answer.length;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
solution([
  ["09:10", "10:10"],
  ["10:20", "12:20"],
]);
solution([
  ["10:20", "12:30"],
  ["10:20", "12:30"],
  ["10:20", "12:30"],
]);

// other - O(n log n)

function solution(book_time) {
  // 시작 시간과 끝 시간을 각각 이벤트로 분리하여 리스트에 저장
  let events = [];
  book_time.forEach((interval) => {
    let [start, end] = interval.map((time) => {
      let [hour, minute] = time.split(":");
      return +hour * 60 + +minute;
    });
    events.push([start, "start"]);
    events.push([end + 10, "end"]);
  });

  // 시각 기준 정렬, 시간이 같다면 'end' 이벤트가 먼저 오도록
  events.sort((a, b) => a[0] - b[0] || (a[1] === "end" ? -1 : 1));

  let maxRooms = 0;
  let currentRooms = 0;

  events.forEach((event) => {
    if (event[1] === "start") {
      currentRooms++;
      maxRooms = Math.max(maxRooms, currentRooms);
    } else {
      currentRooms--;
    }
  });

  return maxRooms;
}

// other

function makeMinStamp(time) {
  const [hour, min] = time.split(":").map((v) => Number(v));
  return hour * 60 + min;
}

function solution(book_time) {
  const timeArr = Array.from({ length: makeMinStamp("23:59") + 10 }, () => 0);

  book_time.forEach((time) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}
