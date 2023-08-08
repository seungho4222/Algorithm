import sys

sys.stdin = open('input.txt', 'r')

T = int(input())
for tc in range(1, T+1):
    card = list(map(int, input().split()))
    # 플레이어 카드 순서
    p1 = []
    p2 = []
    for i in range(12):
        if i % 2 == 0:
            p1 += [card[i]]
        else:
            p2 += [card[i]]
    
    for i in range(4):
        p1[:i+3]