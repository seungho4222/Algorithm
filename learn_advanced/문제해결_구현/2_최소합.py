import sys

sys.stdin = open('input.txt', 'r')


def arr_sum(x,y):
    global v_sum
    global min_sum
    # 오른쪽 맨아래 도착시 합계 최소값 비교
    if x == N-1 and y == N-1 and min_sum > v_sum:
        min_sum = v_sum
        return
    # 비교용 합계가 최소값보다 커지면 리턴
    if min_sum < v_sum:
        return
    # 이동하며 값 더하기
    for i in range(2):
        nr = x + dr[i]
        nc = y + dc[i]
        if nr < N and nc < N:
            v_sum += arr[nr][nc]
            arr_sum(nr,nc)
            # 다른 라인 이동위해 값 빼주기
            v_sum -= arr[nr][nc]


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    # 이동하며 슷자합계 계산후 최소값 산출
    # 오른쪽과 아래쪽만 이동 가능
    dr = [0, 1]
    dc = [1, 0]
    # 0,0 에서 오른쪽아래까지 이동
    r, c = 0, 0
    # 합계 최소값 변수 및 비교용 합계 변수 지정
    min_sum = 10 * (2*N-1)  # 10이하 자연수 * 이동칸
    v_sum = arr[r][c]   # 0,0 값 포함하고 시작
    arr_sum(r,c)
    print(f'#{tc}', min_sum)