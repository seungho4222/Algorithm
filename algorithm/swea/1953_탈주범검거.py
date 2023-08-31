import sys, pprint
sys.stdin = open('input.txt', 'r')

# 터널 구조물 별 이동 가능한 델타 방향
dir = { 1: [[0,1],[1,0],[-1,0],[0,-1]],
        2: [[1,0],[-1,0]],
        3: [[0,1],[0,-1]],
        4: [[-1,0],[0,1]],
        5: [[1,0],[0,1]],
        6: [[1,0],[0,-1]],
        7: [[-1,0],[0,-1]] }

# 터널이 연결되어 있는지 체크
def move_check(x, y, nx, ny):
    for dx, dy in dir[arr[nx][ny]]:
        if x == nx + dx and y == ny + dy:
            return True
    return False

# 지도 구역 내인지 체크
def is_valid(x, y):
    return 0 <= x < N and 0 <= y < M


T = int(input())
for tc in range(1, T+1):
    # N, M: 지도 가로, 세로 / R, C: 맨홀 행, 열 / L: 소요시간
    N, M, R, C, L = map(int, input().split())
    # 1: 상하좌우, 2: 상하, 3: 좌우, 4: 상우, 5: 하우, 6: 하좌, 7: 상좌
    arr = [list(map(int, input().split())) for _ in range(N)]
    visited = [[0]*M for _ in range(N)]  # 방문 기록
    tunnel = [(R, C)]  # bfs 저장
    visited[R][C] = 1  # 출발점 방문 체크
    result = 1  # 탈주범 위치 가능한 곳 -> 시작 맨홀 + 1
    while L > 1:  # 두시간 후부터 이동가능
        L -= 1
        bfs_cnt = len(tunnel)  # bfs 길이만큼 팝하여 확인
        for _ in range(bfs_cnt):
            r, c = tunnel.pop(0)
            for dr, dc in dir[arr[r][c]]:  # 해당 위치의 구조물 델타방향
                nr, nc = r + dr, c + dc
                # 이동방향이 범위 내이고, 방문한적 없고, 구조물이 있으며, 연결된 구조물이면 진행
                if is_valid(nr,nc) and visited[nr][nc] == 0 and arr[nr][nc] != 0 and move_check(r, c, nr, nc):
                    tunnel.append((nr,nc))  # bfs 스택
                    visited[nr][nc] = 1  # 방문 기록
                    result += 1  # 탈주범 가능 위치 카운트
    print(f'#{tc} {result}')
    