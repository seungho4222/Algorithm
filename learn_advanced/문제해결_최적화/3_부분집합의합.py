T = int(input())
for tc in range(1, T+1):
    # 1 ~ N까지 양의 정수를 원소로 갖는 집합 / 원소의 합이 K인 경우의 수 출력
    N, K = map(int, input().split())
    A = [[N, 0]] # 넣을 차례인 수, 합
    ans = 0
    # 최고우선탐색
    while A:
        cur = A.pop()
        if cur[0] == 0:
            continue
        # 한계친 계산 => 해당 단계가 유망한지 판단
        bound = cur[0]*(cur[0]+1)/2 + cur[1]
        # 한계치가 원소의 합보다 큰 경우
        if bound >= K:
            # 넣을 수 + 현재 합 = K 이면 경우의 수 + 1
            if cur[0] + cur[1] == K:
                ans += 1
            # 작으면, 현재합에 숫자 더해주고 다음 단계 스택
            elif cur[0] + cur[1] < K:
                A.append([cur[0] - 1, cur[0] + cur[1]])
            # 현재 합 그대로, 다음 단계 스택
            A.append([cur[0] - 1, cur[1]])
    print(f'#{tc} {ans}')



'''
3
10 7
10 53
100 5050

#1 5
#2 1
#3 1
'''