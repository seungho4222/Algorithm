import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, *M = map(int, input().split())
    matrix = [0] * (N+1)
    memo = [0] * (N+1)

    for i in range(1, N+1):
        cnt = -1
        for x in M:
            matrix[i] += x
            cnt += 1
            if matrix[i] >= i:
                break
        memo[i] = cnt
    print(memo)
    # print(f'#{tc} {memo[N]}')