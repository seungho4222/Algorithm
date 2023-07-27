'''NxN 크기의 미로에서 출발지 목적지가 주어진다.
이때 최소 몇 개의 칸을 지나면 출발지에서 도착지에 다다를 수 있는지 알아내는 프로그램을 작성하시오.
경로가 있는 경우 출발에서 도착까지 가는데 지나야 하는 최소한의 칸 수를, 경로가 없는 경우 0을 출력한다.
다음은 5x5 미로의 예이다. 1은 벽, 0은 통로를 나타내며 미로 밖으로 벗어나서는 안된다.
13101
10101
10101
10101
10021
마지막 줄의 2에서 출발해서 0인 통로를 따라 이동하면 맨 윗줄의 3에 5개의 칸을 지나 도착할 수 있다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
다음 줄부터 테스트 케이스의 별로 미로의 크기 N과 N개의 줄에 걸쳐 미로의 통로와 벽에 대한 정보가 주어진다. 5<=N<=100
0은 통로, 1은 벽, 2는 출발, 3은 도착이다.

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')


def miro():
    global stack
    count = 0               # 이동 칸 카운트
    while stack:
        save = []           # 이동 가능칸이 복수일 경우 중간 저장소
        while stack:
            x, y= stack.pop(0)              # FIFO 중요!!
            matrix[x][y] = -1               # 지나간 경로 표시
            for i in range(4):
                ni = x + di[i]
                nj = y + dj[i]
                if 0 <= ni < N and 0 <= nj < N:
                    if matrix[ni][nj] == 3:
                        return count
                    elif matrix[ni][nj] == 0:
                        save.append((ni, nj))      # 중간 저장소에 저장!! 시작점 기준 카운트!!
        count += 1      # 시작점 기준 카운트
        stack = save    # 기준점에서 갈 수 있는곳 모두 저장한 곳을 스택으로 변경
    return 0
            

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    matrix = [list(map(int, input())) for i in range(N)]
    di = (0, 1, 0, -1)
    dj = (1, 0, -1, 0)
    for i in range(N):
        for j in range(N):
            if matrix[i][j] == 2:
                stack = [(i, j)]
                break
    print(f'#{tc} {miro()}')



## other1
# # 상하좌우 이동표시
# move = [(1,0),(0,1),(-1,0),(0,-1)]

# def bfs(): # 너비우선탐색 함수 
#     global queue
#     count = 0 
#     # temp가 빈리스트면 queue도 빈리스트, return 0으로 이동   
#     while queue:
#         # 지나온 길을 표시할 temp
#         temp = []        
#         while queue:
#             # 출발지점 가로(x),세로(y) 좌표를 꺼내서 
#             y,x = queue.pop()
#             # 상하좌우로 이동
#             for i,j in move:
#                 dy = y+i
#                 dx = x+j
#                 # 맵을 벗어나지 않는다면
#                 if 0 <=dy < N and 0 <= dx < N:	
#    		            # 경로의 값이 0이면 방문처리하고 
#                     if not map_list[dy][dx]:                       
#                         map_list[dy][dx] = 1
#                         # 좌표를 second_queue에 추가
#                         temp.append((dy,dx))
#                     # 도착지에 도착하면 현재 카운트 리턴
#                     if map_list[dy][dx] == 3:
#                         return count
#         # 큐가 비면서 한칸 이동하면 카운트 증가
#         count += 1
#         queue = temp # 세컨큐를 기본큐에 대입
#     return 0 

# T = int(input()) 
# for tc in range(1, 1+T):
#     N = int(input())
#     map_list = [list(map(int, list(input()))) for _ in range(N)]
#     queue = []
#     for i in range(N):
#         for j in range(N):
#             #2를 찾는다면 큐에 넣고 브레이크
#             if map_list[i][j] == 2:
#                 queue.append((i, j))
#                 break
#         #esle는 브레이크에 걸리지 않았을때만 동작한다.
#         #못찾았다면 위로 올린다.
#         else: continue
#         #2를 찾았다면 더이상의 반복문은 필요가 없으므로 정지
#         break
#     #결과값을 출력한다.
#     print(f'#{tc} {bfs()}')



## other2
# def bfs(y, x):
#     distance = [[0 for _ in range(N)] for _ in range(N)]
#     q = [(y, x)]

#     dxy = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 오른쪽, 아래, 왼쪽, 위
#     while q:
#         y, x = q.pop(0)
#         if maze[y][x] == 0 or 2:
#             maze[y][x] = 1

#             for dy, dx in dxy:
#                 ny, nx = y + dy, x + dx

#                 if 0 <= ny <= N-1 and 0 <= nx <= N-1:
#                     if maze[ny][nx] == 0:
#                         distance[ny][nx] = distance[y][x] + 1
#                         q.append((ny, nx))
#                     elif maze[ny][nx] == 3:
#                         return distance[y][x]
#     return 0

# T = int(input())
# for tc in range(1, T+1):
#     N = int(input())
#     maze = [list(map(int, list(input()))) for _ in range(N)]
#     for i in range(N):
#         if 2 in maze[i]:
#             sy, sx = i, maze[i].index(2)
#             break
#     print('#{} {}'.format(tc, bfs(sy, sx)))