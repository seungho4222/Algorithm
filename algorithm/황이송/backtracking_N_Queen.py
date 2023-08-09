N = int(input())
board = [[0]*N for _ in range(N)]
# 퀸 둔 개수
queen_cnt = 0
# N Queen 가능한 배치 수
result = 0
# DFS 방문 기록(이미 둔 퀸의 이동경로 확인용)
visited = []

# 퀸 이동 가능 경로 확인
def queen_move(r, c):
    arr = [[0]*N for _ in range(N)]
    arr[r][c] = 2
    # 세로열
    for i in range(r+1, N):
        arr[i][c] = 1
    # 대각선
    for j in range(1, N):
        # 오른쪽 아래
        if r+j < N and c+j < N and arr[r+j][c+j] == 0:
            arr[r+j][c+j] = 1
        # 왼쪽 아래
        if r+j < N and 0 <= c-j and arr[r+j][c-j] == 0:
            arr[r+j][c-j] = 1
    return arr
# N Queen 체크
def chess(r, c):
    global queen_cnt
    global result
    global visited
    board[r][c] = 2
    queen_cnt += 1
    visited += [(r,c)]
    # 퀸 N개 뒀으니 배치 성공
    if queen_cnt == N:
        result += 1
        return
    # 방문기록에 있는 퀸 이동 경로 모두 확인하여 다음 행에 둘 수 있는 곳 확인
    for i in range(N):
        check = 1
        for v in visited:
            if queen_move(v[0],v[1])[r+1][i]:
                check = 0
                break
        # 둘 수 있으면 다음 행 검사
        if check == 1:
            chess(r+1,i)
            # 함수 빠져나오면 기록 삭제
            board[r+1][i] = 0
            queen_cnt -= 1
            visited.pop()
# 첫 행에서 위치 옮겨가며 배치 체크 (한 행에 무조건 퀸 1개 있으므로)
for c in range(N):
    chess(0, c)
    board[0][c] = 0
    queen_cnt -= 1
    visited.pop()

print(result)