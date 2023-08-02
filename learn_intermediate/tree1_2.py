import sys

sys.stdin = open('input.txt', 'r')

# other
def make_tree(x):
    global number
    if x <= N:
        make_tree(x*2)
        tree[x] += number
        number += 1
        make_tree(x*2 + 1)


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    tree = [0] * (N+1)
    number = 1
    make_tree(1)

    print(f'#{tc}', tree[1], tree[N//2])
    