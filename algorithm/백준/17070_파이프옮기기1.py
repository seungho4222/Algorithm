# 집의 크기
N = int(input())
# 집의 상태 - 빈칸: 0, 벽: 1
home = [list(map(int, input().split())) for _ in range(N)]

cnt = 0
# r,c: 행,열 / s: 파이프 상태 -> 0: 가로, 1: 세로, 2: 대각선
def move(r,c,s):
    global cnt
    # 파이프 끝 도착
    if r == N-1 and c == N-1:
        cnt += 1
        return
    # 가로 이동
    if s == 0 or s == 2:
        if c+1 < N:
            if home[r][c+1] == 0:
                move(r, c+1, 0)
    # 세로 이동
    if s == 1 or s == 2:
        if r+1 < N:
            if home[r+1][c] == 0:
                move(r+1, c, 1)
    # 대각선 이동
    if r+1 < N and c+1 < N:
        if home[r][c+1] == home[r+1][c] == home[r+1][c+1] == 0:
            move(r+1,c+1, 2)

if home[N-1][N-1] == 1:
    print(0)
else:
    move(0,1,0)
    print(cnt)


'''
3
0 0 0
0 0 0
0 0 0

4
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0

5
0 0 1 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0

'''