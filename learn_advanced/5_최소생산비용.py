import sys

sys.stdin = open('input.txt', 'r')


def get_cost(idx, total):
    global cost, top
    if idx == N:
        if cost > total:
            cost = total
            return
    if total > cost:
        return
    for i in range(N):
        if i not in visited:
            top += 1
            visited[top] = i
            get_cost(idx+1, total+arr[idx][i])
            visited[top] = -1
            top -= 1


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    cost = 99 * N
    visited = [-1] * (N + 1)
    top = -1
    get_cost(0,0)
    print(f'#{tc} {cost}')
    