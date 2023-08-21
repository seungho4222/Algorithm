import sys, pprint

sys.stdin = open('input.txt', 'r')

# 동적계획법 적용 - 상향식 최적해 알고리즘
def product():
    # 행: 상품개수
    for i in range(1, M+1):
        # 열: 박스크기
        for j in range(1, N+1):
            # 박스의 크기가 i번째 크기보다 작을 경우 i번째 포함 불가 => i번째를 뺀(i-1) 최대가치
            if size[i] > j:
                K[i][j] = K[i-1][j]
            # i번째 크기를 포함할 수 있는 경우 => 포함하는 경우와 포함하지 않는 경우의 최대값 저장
            else:
                K[i][j] = max(K[i-1][j - size[i]] + price[i], K[i-1][j])
    # 상품 M개 중 상자크기 N일때 최대 가격총합 출력
    return K[M][N]


T = int(input())
for tc in range(1, T+1):
    # N: 박스크기, M: 상품개수
    N, M = map(int, input().split())
    # 상품별 크기 및 가격(1 ~ M번)
    size = [0] * (M+1)
    price = [0] * (M+1)
    for i in range(M):
        s, p = map(int, input().split())
        size[i+1] = s
        price[i+1] = p
    # 최적해 배열
    K = [[0]*(N+1) for _ in range(M+1)]

    print(f'#{tc} {product()}')


'''
2
10 4
6 12
5 10
5 15
4 6
12 5
7 20
3 10
5 3
3 8
6 15

#1 25
#2 33
'''