from collections import deque

d = [[1,0],[0,1],[-1,0],[0,-1]]


def is_valid(r, c):
    return 0 <= r < R and 0 <= c < C


def swan_check():  # 빙판앞 좌표에서 탐색
    global temp
    new_temp = deque()
    while temp:
        sr, sc = temp.popleft()
        for dr, dc in d:
            nr, nc = sr+dr, sc+dc
            if (nr, nc) == swan[1]:  # 백조만나면 리턴
                return True
            if is_valid(nr,nc) and arr[nr][nc] == 1 and (sr,sc) not in new_temp:  # 빙판앞이면 저장
                new_temp.append((sr,sc))
            elif is_valid(nr, nc) and visited[nr][nc] == 0 and arr[nr][nc] == 0:  # 물이면 이동
                visited[nr][nc] = 1
                temp.append((nr,nc))
    temp = new_temp
    return False


R, C = map(int, input().split())  # 행, 열 길이
arr = [[0]*C for _ in range(R)]
stack = deque()  # 물 위치
swan = deque()  # 백조 위치
for i in range(R):  # 배열 입력 0: 물, 1: 빙판, 2: 백조
    inputs = list(input())
    for j in range(C):
        if inputs[j] == '.': stack.append((i,j))
        elif inputs[j] == 'X': arr[i][j] = 1
        elif inputs[j] == 'L': arr[i][j] = 2; swan.append((i,j)); stack.append((i,j))
temp = deque()  # 백조1이 갈 수 있는 경로 중 빙판마주치기전 좌표 저장
swan_move = deque()  # 백조 1이 갈 수 있는 물 좌표 저장
swan_move.append(swan[0])  # 백조1 위치에서 시작
visited = [[0]*C for _ in range(R)]  # 방문 기록
direct = 1  # 첫째날 갈 수 있는지 확인
while swan_move:  # 처음 빙판 앞 좌표 찾기
    r, c = swan_move.popleft()
    if (r,c) == swan[1]:  # 처음에 백조 만났다!
        direct = 0
        print(0)
        break
    for dr, dc in d:  # 이동하면서
        nr, nc = r+dr, c+dc
        if is_valid(nr,nc) and arr[nr][nc] == 1 and (r,c) not in temp:  # 빙판마주치기전 좌표 저장
            temp.append((r,c))
        elif is_valid(nr, nc) and visited[nr][nc] == 0 and arr[nr][nc] != 1:  # 물이면 계속 이동
            visited[nr][nc] = 1
            swan_move.append((nr,nc))

cnt = 0
if direct: # 처음에 못만남 => 첫째날부터 시작
    while True:
        if swan_check():  # 백조 만나면 브레이크
            break
        new_stack = deque()
        while stack:  # 물위치에서 이동
            i, j = stack.popleft()
            for dr, dc in d:
                nr, nc = i+dr, j+dc
                if is_valid(nr, nc) and arr[nr][nc] == 1:  # 빙판이면 좌표 저장
                    new_stack.append((nr,nc))
        for r, c in new_stack:  # 빙판 물로 변경
            arr[r][c] = 0
        stack = new_stack  # 빙판스택 변경
        cnt += 1  # 다음날 진행
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