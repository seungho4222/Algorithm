import sys

sys.stdin = open('input.txt', 'r')


N, K = map(int, input().split())
S = int(input())
nodes = [list(map(int, input().split())) for _ in range(K)]
# 부모노드를 인덱스로 하는 자식노드 값 리스트
tree = [[] for _ in range(101)]
for i in nodes:
    tree[i[0]].append(i[1])

# 전위 순회
pre_result = []
def preorder(x):
    global pre_result
    if x in pre_result: return  # 재탐색 방지
    pre_result += [x]
    save = []   # 자식노드 저장
    for j in tree[x]:   # 자식노드 확인
        save.append(j)
    save.sort() # 큰 번호 우선 탐색
    while save:
        preorder(save.pop())    # 자식노드 재귀
    return pre_result

# 후위 순회
post_result = []
search = []     # 탐색 경로 저장
def postorder(y):
    global post_result
    global search
    search += [y]
    save =[]
    for k in tree[y]:
        if not k in search:     # 재탐색 방지
            save.append(k)
    save.sort()
    while save:
        postorder(save.pop())
    if y in post_result: return     # 재탐색 방지
    post_result += [y]
    return post_result

print(*preorder(S))
print(*postorder(S))