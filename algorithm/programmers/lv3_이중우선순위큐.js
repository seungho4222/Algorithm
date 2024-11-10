/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628
 * 프로그래머스 lv3
 * 이중우선순위큐
 * @param {String[]} operations
 * @returns {Number[]} [Max, Min]
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove(isMaxRemove = false) {
    if (this.isEmpty()) return null;

    if (isMaxRemove) {
      // 최소힙에서 최댓값 찾기
      const lastIndex = this.size() - 1;
      const parentIndex = Math.floor(lastIndex / 2);
      // 마지막 노드의 부모노드 다음부터 리프노드
      const lastLeaf = this.heap.slice(parentIndex);
      // 리프노드 중에 최댓값 존재
      const maxValue = Math.max(...lastLeaf);
      const maxIndex = parentIndex + lastLeaf.indexOf(maxValue);
      // 최댓값 노드와 마지막 노드 교환
      [this.heap[maxIndex], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[maxIndex]];

      return this.heap.pop();
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let index = this.size() - 1;
    const insertedValue = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.heap[parentIndex];

      if (insertedValue < parentValue) {
        this.heap[index] = parentValue;
        index = parentIndex;
      } else break;
    }

    this.heap[index] = insertedValue;
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();
    const rootValue = this.heap[index];

    while (index * 2 + 1 < length) {
      let smallerChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[smallerChildIndex] >= rootValue) {
        break;
      }

      this.heap[index] = this.heap[smallerChildIndex];
      index = smallerChildIndex;
    }

    this.heap[index] = rootValue;
  }
}

function solution(operations) {
  const minHeap = new Heap();

  for (let operation of operations) {
    const [command, num] = operation.split(" ");
    if (command === "I") {
      minHeap.insert(+num);
    } else if (!minHeap.isEmpty()) {
      minHeap.remove(num > 0);
    }
  }

  if (minHeap.size() === 0) {
    return [0, 0];
  } else if (minHeap.size() === 1) {
    const value = minHeap.remove();
    return [value, value];
  } else {
    return [minHeap.remove(true), minHeap.remove()];
  }
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
