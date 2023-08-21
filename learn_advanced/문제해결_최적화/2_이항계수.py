# (x+y)의 n승에서 x의 n-k승,y의 k승의 계수 구하기
def binomial(n,k):
    # 행은 n+1까지
    for i in range(n+1):
        # 열은 최대 k값까지만
        for j in range(min(i,k) + 1):
            # 행마다 양 끝값은 1
            if j == 0 or j == i:
                B[i][j] = 1
            # 끝이 아니면 규칙 적용
            else:
                B[i][j] = B[i-1][j-1] + B[i-1][j]
    return B[n][k]


T = int(input())
for tc in range(1, T+1):
    # (x+y)**n  =>  x**a * y**b
    # n = a + b
    n, a, b = map(int, input().split())
    # 파스칼의 삼각형 매트릭스
    B = [[0]* (n+1) for _ in range(n+1)]
    
    print(f'#{tc} {binomial(n,b)}')
