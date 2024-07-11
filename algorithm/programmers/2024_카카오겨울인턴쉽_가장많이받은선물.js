/**
 * 2024 KAKAO WINTER INTERNSHIP
 * 가장 많이 받은 선물
 * @param {Array} friends [member]
 * @param {Array} gifts ["giveMember takeMember"]
 * @returns
 */

function solution(friends, gifts) {
  const n = friends.length;
  const friendSet = new Set();

  for (let friend of friends) {
    friendSet[friend] = new Set();
    friends.forEach((v) => (friendSet[friend][v] = 0));
    friendSet[friend]["point"] = 0;
  }

  for (let gift of gifts) {
    const [give, take] = gift.split(" ");
    friendSet[give][take]++;
    friendSet[give]["point"]++;
    friendSet[take]["point"]--;
  }

  const next = new Set();
  friends.forEach((v) => (next[v] = 0));

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const [a, b] = [friends[i], friends[j]];
      const [giftAtoB, giftBtoA] = [friendSet[a][b], friendSet[b][a]];
      const [indexA, indexB] = [friendSet[a]["point"], friendSet[b]["point"]];

      if (giftAtoB > giftBtoA) next[a]++;
      else if (giftAtoB < giftBtoA) next[b]++;
      else if (indexA > indexB) next[a]++;
      else if (indexA < indexB) next[b]++;
    }
  }

  return Math.max(...Object.values(next));
}

// Map 사용 코드

function solutionMap(friends, gifts) {
  const n = friends.length;
  const friendMap = new Map();

  for (let friend of friends) {
    friendMap.set(friend, new Map());
    friends.forEach((v) => friendMap.get(friend).set(v, 0));
    friendMap.get(friend).set("point", 0);
  }

  for (let gift of gifts) {
    const [give, take] = gift.split(" ");
    friendMap.get(give).set(take, friendMap.get(give).get(take) + 1);
    friendMap.get(give).set("point", friendMap.get(give).get("point") + 1);
    friendMap.get(take).set("point", friendMap.get(take).get("point") - 1);
  }

  const next = new Map();
  friends.forEach((v) => next.set(v, 0));

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const [a, b] = [friends[i], friends[j]];
      const [giftAtoB, giftBtoA] = [friendMap.get(a).get(b), friendMap.get(b).get(a)];
      const [indexA, indexB] = [friendMap.get(a).get("point"), friendMap.get(b).get("point")];

      if (giftAtoB > giftBtoA) next.set(a, next.get(a) + 1);
      else if (giftAtoB < giftBtoA) next.set(b, next.get(b) + 1);
      else if (indexA > indexB) next.set(a, next.get(a) + 1);
      else if (indexA < indexB) next.set(b, next.get(b) + 1);
    }
  }

  return Math.max(...next.values());
}

const ex1 = [
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ],
];

const ex2 = [
  ["joy", "brad", "alessandro", "conan", "david"],
  [
    "alessandro brad",
    "alessandro joy",
    "alessandro conan",
    "david alessandro",
    "alessandro david",
  ],
];

const ex3 = [
  ["a", "b", "c"],
  ["a b", "b a", "c a", "a c", "a c", "c a"],
];

// 성능비교

console.time("Original Solution");
console.log(solution(...ex1));
console.timeEnd("Original Solution");

console.time("Optimized Solution");
console.log(solutionMap(...ex1));
console.timeEnd("Optimized Solution");
