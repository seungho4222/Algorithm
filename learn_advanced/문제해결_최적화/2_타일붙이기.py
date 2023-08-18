# 메모이제이션
def origami2(n):
    # 타일 최대 크기는 3 => 3까지 규칙 예외
    memo[1] = 1
    memo[2] = 3
    memo[3] = 6
    # 4부터 규칙 적용
    if n > 3:
        for i in range(4, n+1):
            # 타일을 왼쪽에서 1 , 2 , 3 씩 뺏다고 가정하고 계산
            # 2장 뺏을 경우는  ( 2*2 / 2*1 가로로 두장 ) 두방법 존재
            # 1장, 3장은 각 한가지 방법 존재
            memo[i] = memo[i-1] + 2 * memo[i-2] + memo[i-3]
    return memo[n]


T = int(input())
for tc in range(1, T+1):
    # 가로길이 입력
    N = int(input())
    memo = [0] * (N+1)

    print(f'#{tc}', origami2(N))