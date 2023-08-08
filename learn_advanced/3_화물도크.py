import sys

sys.stdin = open('input.txt', 'r')

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    # 화물차별 작업 time table
    tt = [list(map(int, input().split())) for _ in range(N)]
    # 작업 시작시간
    start = 0
    # 24시간동안 가장 많이 화물차를 이용할 수 있는 횟수
    cnt = 0

    while True:
        # 작업 완료시간 비교값 temp (이른 완료시간으로 최신화)
        temp = 24
        # 작업한 화물차 저장
        work = 0
        # 화물차 작업시간 순회
        for i in tt:
            # 작업 시작시간은 start보다 커야함
            if i[0] >= start:
                # 완료시간은 가장 이른값으로 저장
                if temp >= i[1]:
                    temp = i[1]
                    work = i
        # 작업할 수 있는 화물차 없으면 종료
        if work == 0:
            break
        # 작업 완료시간이 다음 작업 시작시간
        start = temp
        # 작업한 화물차 제거
        tt.remove(work)
        # 작업한 화물차 카운트
        cnt += 1

    print(f'#{tc}', cnt)