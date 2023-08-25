T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    # 상하좌우 델타
    dr = [1,-1,0,0]
    dc = [0,0,1,-1]
    # 대각선 델타
    xr = [1,1,-1,-1]
    xc = [1,-1,-1,1]
    # 출력값
    ans = 0
    for r in range(N):
        for c in range(N):
            # 상하좌우 계산
            d_sum = arr[r][c]
            for d in range(4):
                for k in range(1, M):
                    nr = r + dr[d]*k
                    nc = c + dc[d]*k
                    if 0 <= nr < N and 0 <= nc < N:
                        d_sum += arr[nr][nc]
            if ans < d_sum:
                ans = d_sum
            # 대각선 계산
            x_sum = arr[r][c]
            for x in range(4):
                for k in range(1, M):
                    nr = r + xr[x]*k
                    nc = c + xc[x]*k
                    if 0 <= nr < N and 0 <= nc < N:
                        x_sum += arr[nr][nc]
            if ans < x_sum:
                ans = x_sum
    print(f'#{tc} {ans}')