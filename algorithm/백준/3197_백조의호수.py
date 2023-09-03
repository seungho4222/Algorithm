from collections import deque

d = [[1,0],[0,1],[-1,0],[0,-1]]


def is_valid(r, c):
    return 0 <= r < R and 0 <= c < C


def swan_check():
    global temp
    new_temp = deque()
    while temp:
        sr, sc = temp.popleft()
        for dr, dc in d:
            nr, nc = sr+dr, sc+dc
            if (nr, nc) == swan[1]:
                return True
            if is_valid(nr,nc) and arr[nr][nc] == 1 and (sr,sc) not in new_temp:
                new_temp.append((sr,sc))
            elif is_valid(nr, nc) and visited[nr][nc] == 0 and arr[nr][nc] == 0:
                visited[nr][nc] = 1
                temp.append((nr,nc))
    temp = new_temp
    return False


R, C = map(int, input().split())  # 행, 열 길이
arr = [[0]*C for _ in range(R)]
stack = deque()
swan = deque()
for i in range(R):  # 배열 입력 0 = 물공간, 1: 빙판, 2: 백조
    inputs = list(input())
    for j in range(C):
        if inputs[j] == '.': arr[i][j] = 0; stack.append((i,j))
        elif inputs[j] == 'X': arr[i][j] = 1
        elif inputs[j] == 'L': arr[i][j] = 2; swan.append((i,j))
temp = deque()  # 백조1이 갈 수 있는 경로 중 빙판마주치기전 좌표 저장
swan_move = deque()
swan_move.append(swan[0])
visited = [[0]*C for _ in range(R)]
direct = 1
while swan_move:
    r, c = swan_move.popleft()
    if (r,c) == swan[1]:
        direct = 0
        print(0)
        break
    for dr, dc in d:
        nr, nc = r+dr, c+dc
        if is_valid(nr,nc) and arr[nr][nc] == 1 and (r,c) not in temp:
            temp.append((r,c))
        elif is_valid(nr, nc) and visited[nr][nc] == 0 and arr[nr][nc] != 1:
            visited[nr][nc] = 1
            swan_move.append((nr,nc))

cnt = 0
if direct:
    while True:
        if swan_check():
            break
        new_stack = deque()
        while stack:
            i, j = stack.popleft()
            for dr, dc in d:
                nr, nc = i+dr, j+dc
                if is_valid(nr, nc) and arr[nr][nc] == 1:
                    new_stack.append((nr,nc))
        for r, c in new_stack:
            arr[r][c] = 0
        stack = new_stack
        cnt += 1
    print(cnt)



'''
10 2
.L
..
XX
XX
XX
XX
XX
XX
..
.L

4 11
..XXX...X..
.X.XXX...L.
....XXX..X.
X.L..XXX...

8 17
...XXXXXX..XX.XXX
....XXXXXXXXX.XXX
...XXXXXXXXXXXX..
..XXXXX.LXXXXXX..
.XXXXXX..XXXXXX..
XXXXXXX...XXXX...
..XXXXX...XXX....
....XXXXX.XXXL...

'''