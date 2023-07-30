'''V개의 노드 개수와 방향성이 없는 E개의 간선 정보가 주어진다.
주어진 출발 노드에서 최소 몇 개의 간선을 지나면 도착 노드에 갈 수 있는지 알아내는 프로그램을 만드시오.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
다음 줄부터 테스트 케이스의 첫 줄에 V와 E가 주어진다. 5<=V=50, 4<=E<=1000
테스트케이스의 둘째 줄부터 E개의 줄에 걸쳐, 간선의 양쪽 노드 번호가 주어진다.
E개의 줄 이후에는 출발 노드 S와 도착 노드 G가 주어진다.

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.
두 노드 S와 G가 서로 연결되어 있지 않다면, 0을 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')


def node_check():       # 연결된 노드 체크 함수
    global stack        # 함수 내 stack 변경 가능하게끔
    count = 1           # stack에 담긴 값이 이미 한번 연결된 노드
    while stack:
        save = []       # BFS용 중간 저장소
        while stack:
            link = stack.pop()      # stack에서 하나씩 확인
            if link[1] == G:        # 도착시 리턴
                return count
            for i in line:          # pop한 값 연결노드 있는지 확인
                if link[1] == i[0]:     # 노드 끝점, 시작점 비교
                    save.append(i)
                elif link != i and link[1] == i[1]:   # 노드 끝점, 끝점 비교
                    save.append(list(reversed(i)))      # 순서 바꿔서 스택
                    line.remove(i)          # 출구 없을 경우 while문 무한 반복 방지
        count += 1
        stack = save    # 동일 카운트 모두 확인 후 stack 재탐색
    return 0


T = int(input())
for tc in range(1, T+1):
    V, E = map(int, input().split())    # 노드 개수: V, 간선개수: E
    line = [list(map(int, input().split())) for i in range(E)]      # 간선 노드정보
    S, G = map(int, input().split())    # Start, Goal

    stack = [i for i in line if i[0] == S]      # Start 간선정보 스택
    print(f'#{tc} {node_check()}')