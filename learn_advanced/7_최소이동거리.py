import sys

sys.stdin = open('input.txt', 'r')

# 다익스트라
def Dijkstra(s):
    # 시작지점 거리 0
    distance[s] = 0
    # 노드(도로구간)만큼 반복
    for _ in range(N+1):
        # 현재 도로에서 가장 가까운 연결지점 찾기
        min_idx = -1
        min_v = 1e9
        for i in range(N+1):
            if not visited[i] and distance[i] < min_v:
                min_v = distance[i]
                min_idx = i
        visited[min_idx] = 1

        # 현재 도로에서 연결된 도로들의 거리 살펴보기
        for i in range(N+1):
            # 도로 연결되어 있고 방문하지 않았다면
            if matrix[min_idx][i] and not visited[i]:
                if distance[min_idx] + matrix[min_idx][i] < distance[i]:
                    distance[i] = distance[min_idx] + matrix[min_idx][i]
    return distance[N]


T = int(input())
for tc in range(1, T+1):
    # N: 마지막 연결지점번호, E: 도로개수
    N, E = map(int, input().split())
    # 인접배열
    matrix = [[0]*(N+1) for _ in range(N+1)]
    for i in range(E):
        s, e, w = map(int, input().split())
        matrix[s][e] = w
    # 최소 가중치 합
    distance = [1e9] * (N+1)
    # 연결지점 방문 기록
    visited = [0] * (N+1)

    print(f'#{tc}', Dijkstra(0))
    