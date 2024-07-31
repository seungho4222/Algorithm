/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/142085
 * 프로그래머스 lv2
 * 디펜스 게임
 * @param {Number} n 병사 수
 * @param {Number} k 무적권 횟수
 * @param {Number[]} enemy 라운드별 적의 수
 * @returns
 */

// 우선순위 큐

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return max;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element <= parent) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swap = index;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild > this.heap[swap]) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (rightChild > this.heap[swap]) swap = rightChildIndex;
      }

      if (swap === index) break;
      const element = this.heap[index];
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function solution(n, k, enemy) {
  const maxHeap = new MaxHeap();
  let totalRounds = 0;

  for (let i = 0; i < enemy.length; i++) {
    const currentEnemy = enemy[i];
    maxHeap.insert(currentEnemy);

    if (n >= currentEnemy) {
      n -= currentEnemy;
      totalRounds++;
    } else {
      if (k > 0) {
        k--;
        const largestEnemy = maxHeap.extractMax();
        n -= currentEnemy - largestEnemy;
        totalRounds++;
      } else break;
    }
  }

  return totalRounds;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(2, 4, [3, 3, 3, 3]));

// 이분탐색

function solution(n, k, enemy) {
  let lt = 0, rt = enemy.length;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (check(n, k, mid, enemy)) lt = mid + 1;
    else rt = mid - 1;
  }

  return lt - 1;
}

const check = (n, k, mid, enemy) => {
  if (mid <= k) return true;

  let t = enemy.slice(0, mid).sort((a, b) => b - a);
  let sum = 0;

  for (let i = k; i < t.length; i++) {
    sum += t[i];
    if (sum > n) return false;
  }

  return true;
};
