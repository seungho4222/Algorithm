T = int(input())
for tc in range(1, T+1):
    N, string = input().split()  # 찾아야할 부분문자 번호, 문자열
    l = len(string)
    subset = []  # 부분문자열 저장
    for i in range(1, l + 1):  # 부분문자열 길이 (1 ~ len(s))
        for j in range(l + 1 - i):  # 각 부분문자열 개수는 길이와 정반대
            if string[j:j+i] not in subset:
                subset.append(string[j:j+i])  # 부분문자열 잘라서 저장
    result = sorted(subset)[int(N)-1]  # 사전순 정렬 후 N번째 부분문자 추출
    print(f'#{tc} {result[0]} {len(result)}')  # 첫번째 글자와 부분문자열 길이 출력


'''
3
5 abac
9 ltsodjxzyc
21 jldgovukjf

'''