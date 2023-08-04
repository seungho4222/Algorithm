import sys

sys.stdin = open('input.txt', 'r')

N = int(input())
travel = [list(map(int, input().split())) for _ in range(N)]
S, G = map(int, input().split())    # 스타트, 골

# S 행에서 출발
# 방문 행 저장 (재방문 방지)
# 열에 값 있을 경우 cost 추가하고 열에 해당하는 행으로 이동
# 위에 반복 -> S행이 G행이 되면 종료
# G행 도착 시 cost값 맥스 민 비교

max_cost = 0
min_cost = float('inf')
visited = []
cost = 0


def luxury(x):
    global max_cost
    global min_cost
    global visited
    global cost
    visited += [x]      # 재방문 방지
    if x == G:          # 골 도착시 비용 비교
        if max_cost < cost:
            max_cost = cost
        if min_cost > cost:
            min_cost = cost
        return
    for c in range(N):  # 여행가능하면 비용 추가 -> 다음 여행지 순회
        if travel[x][c] and c not in visited:
            cost += travel[x][c]
            luxury(c)
            # 방문지, 비용 스택 제거
            visited.pop()
            cost -= travel[x][c]
    return

luxury(S)

print(min_cost)
print(max_cost)