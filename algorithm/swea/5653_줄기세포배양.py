T = int(input())
for tc in range(1, T+1):
    N, M, K = map(int, input().split())  # N: 세로, M: 가로, K: 배양 시간
    arr = [list(map(int, input().split())) for _ in range(N)]  # 초기 그리드 상태 (1~10)
    