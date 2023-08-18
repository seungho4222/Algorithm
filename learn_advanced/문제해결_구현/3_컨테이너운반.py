import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    wi = sorted(list(map(int, input().split())), reverse=True)
    ti = sorted(list(map(int, input().split())), reverse=True)

    result = 0
    for i in ti:
        for j in wi:
            if i >= j:
                result += j
                wi.remove(j)
                break  
    print(f'#{tc}', result)