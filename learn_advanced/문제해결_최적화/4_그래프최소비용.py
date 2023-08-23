T = int(input())
for tc in range(1, T+1):
    N = int(input())
    # 주어진 인접 행렬
    dp = [list(map(int, input().split())) for _ in range(N)]
    # 없는 경로 값은 큰 수(무한대)로 변경
    for r in range(N):
        for c in range(N):
            if r != c and dp[r][c] == 0:
                dp[r][c] = 1e9
    # 플로이드 워샬 알고리즘 -> 모든 정점쌍 최단경로
    for k in range(N):
        for i in range(N):
            if k != i:
                for j in range(N):
                    if k != j and i != j:
                        dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])
    # 최단경로 중 최대값 출력
    max_v = 0
    for r in range(N):
        for c in range(N):
            if max_v < dp[r][c]:
                max_v = dp[r][c]

    print(f'#{tc} {max_v}')


'''
3
3
0 27 44
-5 0 62
0 99 0
5
0 0 1 0 0
88 0 39 0 75
71 56 0 43 0
23 0 -21 0 92
22 -1 48 0 0
10
0 94 98 0 23 0 31 0 85 0
10 0 78 19 83 0 91 0 82 -7
70 0 0 24 0 66 0 0 46 0
0 40 90 0 82 77 0 0 0 0
72 0 61 16 0 99 0 58 -9 44
82 84 61 76 29 0 30 28 20 72
39 78 76 0 0 11 0 54 58 39
0 0 25 40 10 0 57 0 19 38
68 5 81 78 87 54 60 -7 0 0
67 56 83 74 0 36 0 55 0 0

'''