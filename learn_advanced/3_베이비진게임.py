import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    card = list(map(int, input().split()))
    # 플레이어 카드
    p1 = []
    p2 = []
    winner = 0
    # 카드 분배
    for i in range(12):
        if i % 2 == 0:
            p1 += [card[i]]
        else:
            p2 += [card[i]]
        # p1 베이비진 여부 확인
        arr1 = [0] * 12
        for num in p1:
            arr1[num] += 1
        for j in range(10):
            if arr1[j] >= 3 or (arr1[j] > 0 and arr1[j+1] > 0 and arr1[j+2] > 0):
                winner = 1
                break
        # p2 베이비진 여부 확인
        arr2 = [0] * 12
        for num in p2:
            arr2[num] += 1
        for j in range(10):
            if arr2[j] >= 3 or (arr2[j] > 0 and arr2[j+1] > 0 and arr2[j+2] > 0):
                winner = 2
                break
        
        if winner:
            break
    print(f'#{tc} {winner}')