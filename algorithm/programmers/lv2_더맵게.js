/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 * 프로그래머스 lv2
 * 더 맵게
 * @param {Number[]} scoville
 * @param {Number} K
 * @returns {Number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return minValue;
  }

  heapifyUp() {
    let currentIdx = this.heap.length - 1;
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[currentIdx]) break;
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  heapifyDown() {
    let currentIdx = 0;
    while (true) {
      const leftChildIdx = currentIdx * 2 + 1;
      const rightChildIdx = currentIdx * 2 + 2;
      let parentIdx = currentIdx;

      if (leftChildIdx < this.size() && this.heap[leftChildIdx] < this.heap[parentIdx]) {
        parentIdx = leftChildIdx;
      }

      if (rightChildIdx < this.size() && this.heap[rightChildIdx] < this.heap[parentIdx]) {
        parentIdx = rightChildIdx;
      }

      if (currentIdx === parentIdx) break;
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach((v) => minHeap.insert(v));

  let cnt = 0;
  while (minHeap.heap[0] < K) {
    if (minHeap.size() === 1) return -1;

    const firstFood = minHeap.extractMin();
    const secondFood = minHeap.extractMin();
    minHeap.insert(firstFood + secondFood * 2);
    cnt++;
  }

  return cnt;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
