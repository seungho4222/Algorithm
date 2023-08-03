import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, hexa = list(map(str, input().split()))
    
    print(f'#{tc}', end=' ')
    for i in hexa:
        a = bin(int(i,16))[2:]  # int(str, ??): ??진법을 10진법으로
        print(f'{int(a):04d}', end='')  # bin함수로 2진법 변경시 str타입
    print()