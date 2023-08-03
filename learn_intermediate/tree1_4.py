import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M, L = map(int, input().split())
    leaf_num = [list(map(int, input().split())) for _ in range(M)]
    node = [0] * (N+1)
    for i in leaf_num:
        node[i[0]] = i[1]

    for j in range(N-M,0,-1):
        left = j * 2
        right = j * 2 + 1
        if right in range(1, N+1):
            node[j] = node[j*2] + node[j*2+1]
        else:
            node[j] = node[j*2]

    print(f'#{tc}', node[L])
    