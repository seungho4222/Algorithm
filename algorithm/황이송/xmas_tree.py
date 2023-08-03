import sys

sys.stdin = open('input.txt', 'r')


N = int(input())
deco = [list(map(int, input().split())) for _ in range(N)]
# node -> 인덱스 부모노드 번호, 값 자식노드 번호
node = [[] for _ in range(N+1)]
for i in deco:
        node[i[0]] += [i[1]]
        node[i[0]] += [i[2]]

# 중위순회
in_order = []
search1 = []
def inorder(x):
    global in_order
    global search1
    if x == -1 : return
    search1 += [x]
    for j in node[x]:
        if not j in search1:
            inorder(j)
            if x in in_order : return in_order
            in_order += [x]
    if x in in_order : return
    in_order += [x]
    return in_order

# 전위순회
pre = []
def preorder(x):
    global pre
    if x == -1 : return
    if x in pre : return
    pre += [x]
    for j in node[x]:
        preorder(j)
    return pre

# 후위순회
post = []
search2 = []
def postorder(x):
    global post
    global search2
    if x == -1 : return
    search2 += [x]
    for j in node[x]:
        if not j in search2:
            postorder(j)
    if x in post : return
    post += [x]
    return post

print(*inorder(1))
print(*preorder(1))
print(*postorder(1))