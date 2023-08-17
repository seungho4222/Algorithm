import sys

sys.stdin = open('input.txt', 'r')

# 부모 노드 찾기
def Find_set(x):
    while x != parents[x]:
        x = parents[x]
    return x

# 두 정점 결합
def Union(x, y):
    parents[Find_set(y)] = Find_set(x)

# 크루스칼 알고리즘 구현
# line: 간선정보(연결노드1, 2, 가중치), N: 정점 수
def Kruskal(line, N):
    # 간선 정보 저장
    mst = []
    # 가중치 기준 오름차순으로 정렬
    line.sort(key=lambda x:x[2])
    # 출력값인 간선의 최소 가중치 합
    mst_cost = 0
    # 간선이 N-1개 선택될때까지
    while len(mst) < N-1:
        # 양끝 정점 u, v, 가중치 val
        u, v, val = line.pop(0)
        # 부모노드가 다르면 결합 후 간선 정보 저장 + 가중치합
        if Find_set(u) != Find_set(v):
            Union(u,v)
            mst.append((u,v))
            mst_cost += val
    return mst_cost


T = int(input())
for tc in range(1, T+1):
    V, E = map(int, input().split())
    line = [list(map(int, input().split())) for _ in range(E)]
    
    parents = [i for i in range(V+1)]

    print(f'#{tc}', Kruskal(line, V+1))
    