# my code
N = int(input())
board = [[0]*N for _ in range(N)]
# 퀸 둔 개수
queen_cnt = 0
# N Queen 가능한 배치 수
result = 0

# 퀸 이동 가능 경로 확인
def queen_check(r, c):
    # 세로열
    for i in range(r):
        if board[i][c] == 1:
            return False
    # 왼쪽 위 대각선
    for i, j in zip(range(r, -1, -1), range(c, -1, -1)):
        if board[i][j] == 1:
            return False
    # 오른쪽 위 대각선
    for i, j in zip(range(r, -1, -1), range(c, N)):
        if board[i][j] == 1:
            return False
    return True

# N Queen 체크
def chess(r, c):
    global queen_cnt
    global result
    board[r][c] = 1
    queen_cnt += 1
    # 퀸 N개 뒀으니 배치 성공
    if queen_cnt == N:
        result += 1
        return
    # 상위 행 퀸 체크하여 둘 수 있으면 진행
    for i in range(N):
        if queen_check(r+1,i):
            chess(r+1,i)
            # 함수 빠져나오면 기록 삭제
            board[r+1][i] = 0
            queen_cnt -= 1

# 첫 행에서 위치 옮겨가며 배치 체크 (한 행에 무조건 퀸 1개 있으므로)
for c in range(N):
    chess(0, c)
    board[0][c] = 0
    queen_cnt -= 1

print(result)


# chatGPT
def is_safe(board, row, col, n):
    # 같은 열에 퀸이 있는지 검사
    for i in range(row):
        if board[i][col] == 1:
            return False

    # 왼쪽 위 대각선에 퀸이 있는지 검사
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False

    # 오른쪽 위 대각선에 퀸이 있는지 검사
    for i, j in zip(range(row, -1, -1), range(col, n)):
        if board[i][j] == 1:
            return False

    return True

def solve_n_queens_util(board, row, n):
    if row == n:
        return 1

    count = 0
    for col in range(n):
        if is_safe(board, row, col, n):
            board[row][col] = 1
            count += solve_n_queens_util(board, row + 1, n)
            board[row][col] = 0

    return count

def solve_n_queens(n):
    board = [[0] * n for _ in range(n)]
    return solve_n_queens_util(board, 0, n)

n = int(input("체스판 크기를 입력하세요: "))
result = solve_n_queens(n)
print(f"{n} Queen 문제의 배치 가능한 횟수: {result}")