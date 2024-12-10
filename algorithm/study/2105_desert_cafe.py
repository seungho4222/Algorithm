# 목표하는 지점까지 도착해야 끝나므로 dfs!
# 어차피 디저트가 중복될 수 없으므로 방문체크 X
# 사각형을 그리는 경우, 중복방지를 위해 한가지 방향만 생각해주면 된다.
# (사각형 하나를 만들때 방향 전환은 딱 3번만 해주면 된다.)
# 현재 위치에서 이동할 수 있는 경우의 수는 직진과 꺾어서 가는 경우 2가지
# 위의 2가지를 완전 탐색하고 최대 값을 출력


import sys
sys.stdin = open('input.txt')

# 디저트카페 탐색
# x, y: 기준 좌표, path: 디저트 방문 기록, way: 델타 방향
def dfs(x, y, path, way):
    global cnt, i, j
    # 방향 3번 꺾고, 원점으로 돌아왔으면 값 비교
    if way == 3 and x == i and y == j and len(path) > 2:
        cnt = max(cnt, len(path))
        return
    # 범위 내 방문안한 디저트면 체크
    if 0 <= x < N and 0 <= y < N and cafe[x][y] not in path:
        new_path = path + [cafe[x][y]]
        
        # 직진
        nx, ny = x+dxy[way][0], y+dxy[way][1]
        dfs(nx, ny, new_path, way)

        # 꺾는 경우
        if way < 3:
            nx, ny = x+dxy[way+1][0], y+dxy[way+1][1]
            dfs(nx, ny, new_path, way+1)
        

T = int(input())

for tc in range(1, T+1):
    N = int(input())
    cafe = [list(map(int, input().split())) for _ in range(N)]
    # 오른쪽 아래, 왼쪽 아래, 왼쪽 위, 오른쪽 위
    dxy = [(1, 1), (1, -1), (-1, -1), (-1, 1)]
    # 탐색 실패값 -1 시작
    cnt = -1
    # 모든 행열 탐색
    for i in range(N):
        for j in range(N):
            dfs(i, j, [], 0)
    
    print('#{} {}'.format(tc, cnt))