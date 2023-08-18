import sys

sys.stdin = open('input.txt', 'r')

# 다익스트라 알고리즘
def dijkstra(x, y):
    # 시작점 스택
    q = [(x, y)]
    # 시작 연료 0
    dp[x][y] = 0
    while q:
        r, c = q.pop(0)
        # 델타 탐색
        for dr, dc in [[0,1],[1,0],[-1,0],[0,-1]]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < N and 0 <= nc < N:
                # 델타 이동 후 높이 차 계산
                temp = 0
                if arr[nr][nc] > arr[r][c]:
                    temp += arr[nr][nc] - arr[r][c]
                # 연료 소비량 비교 후 최소값 갱신
                if dp[nr][nc] > dp[r][c] + temp + 1:
                    q += [(nr, nc)]
                    dp[nr][nc] = dp[r][c] + temp + 1
    # 목적지 연료 소비량 출력
    return dp[N-1][N-1]


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    # arr의 최소 연료 소비량 배열
    dp = [[1e9] * N for _ in range(N)]
    
    print(f'#{tc} {dijkstra(0,0)}')