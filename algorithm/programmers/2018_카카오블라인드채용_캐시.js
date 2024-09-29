/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 * 프로그래머스 lv2 - 2018 KAKAO BLIND RECRUITMENT
 * [1차] 캐시
 * @param {Number} cacheSize
 * @param {String[]} cities
 * @returns {Number}
 */

function solution(cacheSize, cities) {
  let time = 0;
  const n = cities.length;
  const lst = [];

  if (cacheSize === 0) return n * 5;

  for (let i = 0; i < n; i++) {
    const city = cities[i].toLowerCase();
    const idx = lst.indexOf(city);

    if (idx === -1) {
      if (lst.length === cacheSize) lst.shift();
      time += 5;
    } else {
      lst.splice(idx, 1);
      time += 1;
    }
    lst.push(city);
  }

  return time;
}

// 최적화

function solution(cacheSize, cities) {
  let time = 0;
  const cache = new Map();

  if (cacheSize === 0) return cities.length * 5;

  for (let city of cities) {
    city = city.toLowerCase();

    // 캐시 히트
    if (cache.has(city)) {
      time += 1;
      cache.delete(city); // 기존 위치에서 제거
    } else {
      // 캐시 미스
      time += 5;
      if (cache.size === cacheSize) {
        // 가장 오래된 데이터 삭제 (LRU)
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
    }

    cache.set(city, true); // 최신 항목으로 다시 삽입
  }

  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "jeju"]));
