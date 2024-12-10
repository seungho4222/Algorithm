N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
# 상하좌우 델타
dr = [1,-1,0,0]
dc = [0,0,1,-1]
# 섬 개수 출력값
cnt = 0
for r in range(N):
    for c in range(M):
        # 섬인 경우만 탐색
        if arr[r][c] == 1:
            stack = []
            while True:
                # 해당 위치 0으로 변경 후 델타 탐색
                arr[r][c] = 0
                for d in range(4):
                    nr = r + dr[d]
                    nc = c + dc[d]
    # 주변에 섬 발견하면 기준섬 스택에 넣고 주변섬을 기준섬으로 변경 후 탐색 진행
                    if 0 <= nr < N and 0 <= nc < M and arr[nr][nc] == 1:
                        stack += [(r, c)]
                        r, c = nr, nc
                        break
                # 기준섬에 이어진섬이 없으면 스택값 꺼내서 탐색 진행
                else:
                    if stack:
                        r, c = stack.pop(0)
                    else:
                        break
            # 기준섬과 이어진 섬을 모두 0으로 변경 후 카운트
            cnt += 1

print(cnt)


'''
5 8
0 0 0 0 0 0 0 0
0 1 0 1 0 1 1 1
0 1 1 1 0 0 1 1
0 0 0 0 0 1 0 0
0 1 1 1 1 1 0 0

'''