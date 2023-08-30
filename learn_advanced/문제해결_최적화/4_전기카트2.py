import sys
sys.stdin = open('input.txt', 'r')

# dp + 비트마스크
def cart(idx, visited):
    if dp[idx][visited]:  # dp기록 있으면 반환
        return dp[idx][visited]
    
    if visited == V_ALL:  # 모두 방문했으면 복귀 값 반환
        return arr[idx][0]  # 각 행의 사무실 복귀 값
    
    min_v = 1e9
    for j in range(1, N):
        if visited & (1 << j-1) == 0:  # 방문한 적 없으면
            total = arr[idx][j] + cart(j, visited | (1 << j-1))  # 배터리값은 마지막 값부터 역으로 더해주기
            min_v = min(min_v, total)  # idx ~ 모두 방문한 경우의 수 중 배터리 합의 최소값

    dp[idx][visited] = min_v  # idx ~ 모두 방문한 최소값 dp 저장
    
    return min_v  # 최종 출력값은 0 ~ 모두 방문한 경우의 수 중 배터리 합의 최소값!!


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    dp = [[0]*(1<<(N-1)) for _ in range(N)]  # ex) 1-2-3-4, 2-1-3-4 에서 3-4는 중복이므로 기록해서 반복 방지
    V_ALL = (1<<N-1) - 1  # ex) N=4일때, 111이면 사무실 제외한 모든 구역 방문한 것
    print(f'#{tc} {cart(0, 0)}')



'''
1
12
0 9 26 85 42 1 1 1 1 1 1 1
14 0 84 31 27 1 1 1 1 1 1 1
58 88 0 16 46 1 1 1 1 1 1 1
83 61 94 0 17 1 1 1 1 1 1 1
40 71 24 38 0 1 1 1 1 1 1 1
1 1 1 1 1 0 1 1 1 1 1 1
1 1 1 1 1 1 0 1 1 1 1 1
1 1 1 1 1 1 1 0 1 1 1 1
1 1 1 1 1 1 1 1 0 1 1 1
1 1 1 1 1 1 1 1 1 0 1 1
1 1 1 1 1 1 1 1 1 1 0 1
1 1 1 1 1 1 1 1 1 1 1 0

N이 12인 경우, 6번 줄의 기록반환 44968번 실행
'''