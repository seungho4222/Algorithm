T = 10
for tc in range(1, T+1):
    N = int(input())
    # 테이블 위쪽이 N극, 아래쪽이 S극
    # 100 x 100 배열 / N: 1, S: 2
    arr = [list(map(int, input().split())) for _ in range(N)]
    # 교착상태 수 출력값
    cnt = 0
    for c in range(N):
        # 교착 체크 함수
        temp = 0
        for r in range(N):
            # 0이면 무시
            if arr[r][c] == 0:
                continue
            # N극이 떨어지면 1로 체크
            if arr[r][c] == 1:
                temp = 1
            # 떨어지는중 S극 만나면 교착 초기화하고 카운트
            if temp == 1 and arr[r][c] == 2:
                temp = 0
                cnt += 1
    print(f'#{tc} {cnt}')