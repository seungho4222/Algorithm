N = int(input())
arr = [[0]*N for _ in range(N)]

row = 0

queen_cnt = 0
result = 0
# chess판에서 퀸은 2, 퀸의 경로는 1로 표시
def chess(r, x):
    global queen_cnt
    if arr[r][x]:
        return
    arr[r][x] = 2
    queen_cnt += 1
    if queen_cnt == N:
        result += 1
        return
    for i in range(r+1, N):
        for j in range(1, N):
            if arr[i][x] == 0:
                arr[i][x] = 1
            if r+j < N and x+j < N and arr[r+j][x+j] == 0:
                arr[r+j][x+j] = 1
            if r+j < N and 0 <= x-j and arr[r+j][x-j] == 0:
                arr[r+j][x-j] = 1
    r += 1
    for k in range(N):
        chess(r,k)

    return arr

print(chess(row, 0))