T = int(input())
for tc in range(1, T+1):
    inputs = list(input().split())
    N, S = int(inputs[0]), inputs[1]  # 찾아야할 부분문자 번호, 문자열
    A = [''] * len(S)  # 접미어 배열
    for i in range(len(S)):
        A[i] = S[i:]
    A.sort()  # 접미어 배열 사전순 정렬
    cnt = len(A[0])  # 첫번째 접미어 길이 = 부분문자 수 체크
    j = 0  # 접미어 순서
    k = 0  # LCP (Longest Common Prefix) 최장 공통 접두어
    while N > cnt:  # 아직 찾아야할 부분문자 번호를 못찾았다
        k = 0  # LCP 초기화
        j += 1  # 다음 접미어
        while A[j][k] == A[j-1][k]:  # 이전 접미어와 앞자리부터 같은 글자 수 체크
            k += 1
        cnt = cnt + len(A[j]) - k  # 현재 부분문자 수 + 다음 접미어 길이 - 중복 글자 수  <- j번째 접미어까지의 부분문자 수
    cnt = cnt - len(A[j]) + k  # j번째 접미어에 찾아야할 부분문자가 있다! -> 일단, j-1번째까지 부분문자 수로 초기화 후 계산
    print(f'#{tc} {A[j][0]} {k+N-cnt}')
    # cnt: j-1번째까지의 부분문자수
    # N: N번째 부분문자는 j번째 접미어에 있다 -> 무조건 cnt보다 크다
    # k: j번째 접미어에 N번째 부분문자가 있지만, j-1번째까지의 부분문자 중에 중복된 부분문자가 있을 수 있으니 중복값 +



# ['abac', 'ac', 'bac', 'c']
'''
3
5 abac
9 ltsodjxzyc
21 jldgovukjf

'''