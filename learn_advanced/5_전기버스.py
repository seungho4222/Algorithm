import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    # N: 정류장 수, M: N-1개의 정류장별 배터리 용량
    N, *M = map(int, input().split())
    # 최소 교환횟수
    exchange = 0
    # 스타트 0은 1번 정류장을 의미
    start = 0
    # N-1은 종점
    while start < N-1:
        # 운행 정류장 수
        move = 0
        # 현재 정류장에서 갈 수 있는 정류장 합이 종점이상이면 종료
        if start + M[start] >= N-1:
            break
        # 현재 정류장에서 갈 수 있는 정류장 범위 내 배터리 조사
        for i in range(start+1,start + M[start]+1):
            # (갈 수 있는 정류장 + 그 정류장에서 더 갈 수 있는 정류장) 범위 최대값 조사
            if move <= i + M[i]:
                move = i + M[i]
                start = i
        # 현재 정류장(start) 변경 후 배터리 교환
        exchange += 1

    print(f'#{tc}', exchange)
