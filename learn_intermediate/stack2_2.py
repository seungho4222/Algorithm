'''NxN 크기의 미로에서 출발지에서 목적지에 도착하는 경로가 존재하는지 확인하는 프로그램을 작성하시오. 도착할 수 있으면 1, 아니면 0을 출력한다.
주어진 미로 밖으로는 나갈 수 없다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
다음 줄부터 테스트 케이스의 별로 미로의 크기 N과 N개의 줄에 걸쳐 미로의 통로와 벽에 대한 정보가 주어진다. 0은 통로, 1은 벽, 2는 출발, 3은 도착이다. 5<=N<=100

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 계산결과를 정수로 출력하거나 또는 'error'를 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')

# 미로
def miro():
    while stack:
        y, x = stack.pop()
        arr[y][x] = -1      # 지나간 길 표시
        for i in range(4):  # 네 방향 탐색
            ni = y + di[i]
            nj = x + dj[i]
            if 0 <= ni < N and 0 <= nj < N:
                if arr[ni][nj] == 3:    # 도착점 찾으면 1 return
                    return 1
                elif arr[ni][nj] == 0:  # 갈 수 있는 곳을 전부 stack에 담는다.
                    stack.append((ni, nj))
    return 0    # 도착점 못 찾으면 0 return


T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input())) for _ in range(N)]   # 미로
    di = (0, 1, 0, -1)      # di, dj의 각 인덱스 별로 이동하여 네방향 탐색
    dj = (1, 0, -1, 0)
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 2:  # 시작점 찾기
                stack = [(i, j)]
                break
    print(f'#{tc} {miro()}')