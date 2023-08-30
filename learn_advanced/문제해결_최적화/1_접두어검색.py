T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())  # N: A의 단어개수, M: B의 단어개수
    a_words = [input() for _ in range(N)]  # 문자열 그룹 A
    b_words = [input() for _ in range(M)]  # 그룹 B => 그룹A의 접두어인지 확인
    cnt = 0  # 접두어 카운트
    for head in b_words:  # 그룹 B의 문자열이
        for word in a_words:  # 그룹 A 문자열의 접두어인지?
            l = len(head)  # 접두어 길이
            if len(word) >= l and word[:l] == head:  # A문자열의 앞부분이 접두어와 같으면 카운트
                cnt += 1
                break
    print(f'#{tc} {cnt}')
