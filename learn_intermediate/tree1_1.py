import sys

sys.stdin = open('input.txt', 'r')

# 노드 카운트 함수 정의
def subtree(x):
    global cnt
    cnt += 1
    # 자식노드 존재시 재귀함수 실행
    for j in tree[x]:
        if j:
            subtree(j)
    return cnt


T = int(input())
for tc in range(1, T+1):
    E, N = map(int, input().split())
    node_line = list(map(int, input().split()))
    # 부모 노드의 번호를 인덱스로, 자식노드를 값으로 하는 리스트 정의
    tree = [[] for _ in range(E+2)]     # 노드번호는 E+1번까지 존재
    for i in range(0, len(node_line), 2):
        tree[node_line[i]].append(node_line[i+1])
    cnt = 0

    print(f'#{tc}', subtree(N))