import sys

sys.stdin = open('input.txt', 'r')


def make_tree(x):
    if x <= N:
        tree.append(x)
        if x > 1 and nodes[tree[-1]] < nodes[tree[-2]]:
            nodes[tree[-1]], nodes[tree[-2]] = nodes[tree[-2]], nodes[tree[-1]]
        make_tree(2*x)
        make_tree(2*x + 1)
        tree.pop()

ans = 0
def sum_tree(y):
    global ans
    while y:
        y = y // 2
        if y == 0:
            return
        ans += nodes[y]
        sum_tree(y)
    return ans

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    nodes = [0] + list(map(int, input().split()))
    tree = [0]
    make_tree(1)

    print(f'#{tc}', sum_tree(N))
    
