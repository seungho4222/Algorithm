/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 * 프로그래머스 lv3
 * 베스트앨범
 * @param {String[]} genres
 * @param {Number[]} plays
 * @returns {Number[]}
 */

class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
    this.sum = 0;
  }

  getSum() {
    return this.sum;
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);

    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.heap[parentIndex];

      if (this.compare(value, parentValue) < 0) {
        this.heap[index] = parentValue;
        index = parentIndex;
      } else break;
    }

    this.heap[index] = value;
    this.sum += value[1];
  }

  remove() {
    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.size() !== 0) {
      let index = 0;
      const length = this.size();

      while (index * 2 + 1 < length) {
        let smallerChildIndex = index * 2 + 1;
        const rightChildIndex = index * 2 + 2;

        if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallerChildIndex]) < 0) {
          smallerChildIndex = rightChildIndex;
        }

        if (this.compare(this.heap[smallerChildIndex], last) < 0) {
          this.heap[index] = this.heap[smallerChildIndex];
          index = smallerChildIndex;
        } else break;
      }

      this.heap[index] = last;
    }

    return root;
  }
}

function solution(genres, plays) {
  var answer = [];
  const map = new Map();

  for (let i = 0; i < genres.length; i++) {
    const [genre, play] = [genres[i], plays[i]];

    if (!map.has(genre)) map.set(genre, new Heap((a, b) => b[1] - a[1]));
    map.get(genre).insert([i, play]);
  }

  const sorted = [...map.values()].sort((a, b) => b.getSum() - a.getSum());

  for (let heap of sorted) {
    answer.push(heap.remove()[0]);
    if (heap.size()) answer.push(heap.remove()[0]);
  }

  return answer;
}

// other

function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};
  return genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
