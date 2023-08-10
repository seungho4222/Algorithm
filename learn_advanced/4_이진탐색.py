import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    # 이진탐색은 정렬된 리스트 기준으로 진행
    A = sorted(list(map(int, input().split())))
    B = list(map(int, input().split()))
    # 연속으로 한방향으로 이동하지 않고 탐색을 성공한 카운트
    result = 0

    for i in B:
        # 이동 방향 기록
        check = 0
        l = 0
        r = N-1
        while l <= r:
            m = (l+r)//2
            if A[m] == i:
                result += 1
                break
            elif A[m] > i and check != 'l':
                r = m - 1
                check = 'l'
            # 이동방향이 겹치므로 브레이크
            elif A[m] > i and check == 'l':
                break
            elif A[m] < i and check != 'r':
                l = m + 1
                check = 'r'
            # 이동방향이 겹치므로 브레이크
            elif A[m] < i and check == 'r':
                break
    print(f'#{tc}', result)