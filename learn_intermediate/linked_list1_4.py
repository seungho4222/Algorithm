import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M, L = map(int, input().split())
    arr = list(map(int, input().split()))
    edit = [input().split() for _ in range(M)]

    for i in range(M):
        if edit[i][0] == 'I':
            arr.insert(int(edit[i][1]),int(edit[i][2]))
        elif edit[i][0] == 'D':
            arr.pop(int(edit[i][1]))
        elif edit[i][0] == 'C':
            arr[int(edit[i][1])] = int(edit[i][2])
    
    try:
        print(f'#{tc}', arr[L])
    except IndexError:
        print(f'#{tc}', -1)