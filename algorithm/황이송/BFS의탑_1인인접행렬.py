N = int(input())
node = [list(map(int, input().split())) for _ in range(N)]
# 접근한 노드순 출력값
bfs = [0]   # 0번부터 접근하여 순서대로 방문할떄마다 추가
visited = []    # 재귀함수용 방문기록

# bfs 재귀함수 정의
def bfs_search(x):
    global bfs
    global visited
    # 연결 노드 확인하며 방문안했으면 추가
    for i in range(N):
        if i not in bfs and node[x][i]:
            bfs += [i]
            visited += [i]
    # 방문한 노드 bfs에 모두 추가한 후, 추가 순서대로 연결노드 확인
    if visited:
        bfs_search(visited.pop(0))
    return bfs

print(*bfs_search(0))