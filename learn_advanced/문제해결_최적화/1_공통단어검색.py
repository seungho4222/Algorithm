T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())  # N: A의 단어 수, M: B의 단어 수
    a_words = [input() for _ in range(N)]  # A 단이장
    b_words = [input() for _ in range(M)]  # B 단어장
    cnt = 0  # 공통 단어 개수
    if N > M:  # A의 단어가 더 많은 경우
        for i in b_words:  # B 단어장의 단어가
            if i in a_words:  # A에 있으면 카운트
                cnt += 1
    else:  # B의 단어가 더 많은 경우
        for i in a_words:  # A 단어장의 단어가
            if i in b_words:  # B에 있으면 카운트
                cnt += 1
    print(f'#{tc} {cnt}')
