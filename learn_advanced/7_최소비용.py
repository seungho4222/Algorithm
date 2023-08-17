import sys

sys.stdin = open('input.txt', 'r')

def bfs(r, c, ans):
    global result
    if r == N-1 and c == N-1:
        if result > ans:
            result = ans
            return
    if ans > result:
        return
    for d in range(2):
        nr = r + dr[d]
        nc = c + dc[d]
        if 0 <= nr < N and 0 <= nc < N:
            if arr[nr][nc] > arr[r][c]:
                v = arr[nr][nc] - arr[r][c] + 1
            else:
                v = 1
            bfs(nr, nc, ans+v)
    return result


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    dr = [0, 1]
    dc = [1, 0]
    result = float('inf')

    print(f'#{tc} {bfs(0,0,0)}')