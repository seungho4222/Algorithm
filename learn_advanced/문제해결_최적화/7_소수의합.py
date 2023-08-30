T = int(input())
for tc in range(1, T+1):
    a, b = map(int, input().split())
    # 에라토스테네스의 체
    sieve = [True] * b
    for i in range(2, int(b**0.5)+1):
        if sieve[i]:
            k = 2
            while i*k < b:
                sieve[i*k] = False
                k += 1
    result = 0  # 출력값인 a < p < b를 만족하는 모든 소수 p의 합
    for p in range(a+1, b):
        if sieve[p]: result += p
    print(f'#{tc} {result}')
