import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, *M = map(int, input().split())
    exchange = 0
    start = 0
    while start < N-1:
        move = 0
        if start + M[start] >= N-1:
            break
        for i in range(start+1,start + M[start]+1):
            if move <= i + M[i]:
                move = i + M[i]
                start = i
        exchange += 1


    print(f'#{tc}', exchange)
