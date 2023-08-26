import sys
sys.stdin = open('input.txt', 'r')

# 진행방향 - 상하좌우
dir = {1: (-1,0), 2: (1,0), 3: (0,-1), 4: (0,1)}
# 진행방향 바꾸기
wall = [0, 2, 1, 4, 3]

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    # 0: 빈 공간 / -1: 블랙홀 / 6~10: 웜홀(페어) / 1: └ / 2: ┌ / 3: ┐ / 4: ┘ / 5: □
    # 시작위치 돌아오거나 블랙홀 만나면 종료
    # 1 ~ 5 또는 벽 만나면 점수 카운트
    arr = [list(map(int, input().split())) for _ in range(N)]
    max_v = 0  # 점수 최댓값
    # 시작 가능위치 저장
    start = []
    # 웜홀 저장
    worm = [[] for _ in range(11)]
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 0:  # 시작 위치
                start.append((i, j))
            elif arr[i][j] in [6,7,8,9,10]:  # 웜홀 위치
                worm[arr[i][j]].append((i,j))
    # 시작 위치에서 탐색
    for i in range(len(start)):
        # 진행방향별 탐색
        for sd in range(1,5):
            r, c = start[i]  # 시작 위치
            d = sd  # 시작 뱡향
            score = 0  # 점수 카운트
            # 핀볼 게임 시작
            while True:
                # 현재 위치에서 진행방향으로 이동
                dr, dc = dir[d]
                nr, nc = r + dr, c + dc
                # 시작위치이거나 블랙홀이면 게임 종료
                if (0 <= nr < N and 0 <= nc < N) and ((nr, nc) == start[i] or arr[nr][nc] == -1):
                    break
                # 범위 밖이면 방향 반대로, 카운트 + 1
                if not (0 <= nr < N and 0 <= nc < N):
                    d = wall[d]
                    score += 1
                    r, c = nr, nc
                # 아무것도 없으면 계속 이동
                elif arr[nr][nc] == 0:
                    r, c = nr, nc
                # 웜홀일 경우
                elif arr[nr][nc] in [6,7,8,9,10]:
                    for move in worm[arr[nr][nc]]:  # 해당 웜홀 페어 중
                        if move != (nr, nc):  # 현재위치 아닌 웜홀로 이동
                            r, c = move[0], move[1]
                # 블록 만나면 카운트 후 방향 전환
                elif arr[nr][nc] == 1:
                    if d == 1 or d == 4:
                        d = wall[d]
                        score += 1
                        r, c = nr, nc
                    elif d == 2:
                        d = 4
                        score += 1
                        r, c = nr, nc
                    elif d == 3:
                        d = 1
                        score += 1
                        r, c = nr, nc
                elif arr[nr][nc] == 2:
                    if d == 2 or d == 4:
                        d = wall[d]
                        score += 1
                        r, c = nr, nc
                    elif d == 1:
                        d = 4
                        score += 1
                        r, c = nr, nc
                    elif d == 3:
                        d = 2
                        score += 1
                        r, c = nr, nc
                elif arr[nr][nc] == 3:
                    if d == 2 or d == 3:
                        d = wall[d]
                        score += 1
                        r, c = nr, nc
                    elif d == 1:
                        d = 3
                        score += 1
                        r, c = nr, nc
                    elif d == 4:
                        d = 2
                        score += 1
                        r, c = nr, nc
                elif arr[nr][nc] == 4:
                    if d == 1 or d == 3:
                        d = wall[d]
                        score += 1
                        r, c = nr, nc
                    elif d == 2:
                        d = 3
                        score += 1
                        r, c = nr, nc
                    elif d == 4:
                        d = 1
                        score += 1
                        r, c = nr, nc
                elif arr[nr][nc] == 5:
                    d = wall[d]
                    score += 1
                    r, c = nr, nc
            max_v = max(max_v, score)
    print(f'#{tc} {max_v}')
