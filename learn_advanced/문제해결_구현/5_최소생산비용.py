import sys

sys.stdin = open('input.txt', 'r')

# idx: 행 카운트, total: 생산비용(최소값 구해야함)
def get_cost(idx, total):
    global cost, top
    # 행이 N까지 왔으면 행마다 1개씩 모두 계산한 것. 총합 비교 후 변경
    if idx == N:
        if cost > total:
            cost = total
            return
    # 행이 N이 되기 전 이미 최소 비용을 넘었다면 리턴
    if total > cost:
        return
    # 행마다 열 순회하며 값 비교
    for i in range(N):
        # 동일 열 방문 방지
        if i not in visited:
            # 방문 기록용
            top += 1
            visited[top] = i
            # 해당 열의 값 더해주고 다음 행 이동
            get_cost(idx+1, total+arr[idx][i])
            # 방문 기록삭제
            visited[top] = -1
            top -= 1


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    # 최대비용 저장 후 최소비용으로 갱신
    cost = 99 * N
    # -1: 미방문, 0~N: 방문
    visited = [-1] * (N + 1)
    # 스택 구현
    top = -1
    # 0행부터 시작, 비용은 0
    get_cost(0,0)
    print(f'#{tc} {cost}')


'''
3
3
73 21 21
11 59 40
24 31 83
5
93 4 65 31 66
63 12 60 60 84
87 57 44 35 20
12 9 40 12 40
60 21 3 49 54
6
55 83 32 79 53 70
77 88 80 93 42 29
54 26 5 10 25 94
77 92 82 83 11 51
84 11 21 62 45 58
37 88 13 34 41 4

'''