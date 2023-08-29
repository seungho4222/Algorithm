T = int(input())
for tc in range(1, T+1):
    N = int(input())
    no_dup = 1
    all_case = 10 ** N  # 모든 케이스
    for i in range(N):  # 중복 없는 케이스
        no_dup *= 10 - i

    print(f'#{tc} {no_dup/all_case:.5f}')