import sys

sys.stdin = open('input.txt', 'r')

# 사무실 출발 - 각 관리구역 1회씩 방문 - 사무실 도착
def golf_road(x):
    global min_battery
    global battery
    global visited
    visited += [x]  # 재방문 방지
    # 관리구역 모두 방문시 사무실로 돌아가고 최소 배터리량과 비교(사무실 돌아가는 배터리량도 계산)
    if len(visited) == N:
        battery += road[x][0]
        if min_battery > battery:
            min_battery = battery
        battery -= road[x][0]
        return
    # 각 관리구역 돌며 배터리량 추가
    for i in range(1, N):
        if i not in visited:
            battery += road[x][i]
            golf_road(i)
            # 다른 루트 찾기 위해 기록 삭제
            battery -= road[x][i]
            visited.pop()
    return


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    road = [list(map(int, input().split())) for _ in range(N)]
    # 배터리 사용량 100 이하의 자연수
    min_battery = 100 * N
    battery = 0
    visited = []

    golf_road(0)
    print(f'#{tc} {min_battery}')