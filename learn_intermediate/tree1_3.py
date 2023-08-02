import sys

sys.stdin = open('input.txt', 'r')

# 최소힙 정렬
def heapify_up(idx):
    while idx > 1 and heap[idx] < heap[idx // 2]:
        heap[idx], heap[idx // 2] = heap[idx // 2], heap[idx]
        idx //= 2

T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    nums = list(map(int, input().split()))

    heap = [0]  # 힙의 인덱스를 1부터 시작하기 위해 0 추가
    for num in nums:
        heap.append(num)
        heapify_up(len(heap) - 1)

    idx = N     # len(heap) - 1
    ans = 0
    while idx > 1:
        idx //= 2
        ans += heap[idx]

    print(f'#{tc} {ans}')