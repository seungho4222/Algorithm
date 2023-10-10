T = int(input())
for tc in range(1, T+1):
    N, M, C = map(int, input().split())  # N: 벌통크기, M: 선택벌통 수, C: 채취가능한 최대 양
    arr = [list(map(int, input().split())) for _ in range(N)]  # N * N 벌통 정보

    # 벌통은 가로로만 선택 가능, 중복 X
    # 수익은 각 벌통의 제곱


    def choice(lst):  # 선택한 꿀통의 최대 수익 계산
        max_v = 0  # 최대 수익 반환
        l = len(lst)
        for i in range(1 << l):
            subset = [lst[j] for j in range(l) if i & (1 << j)]
            if sum(subset) > C:  # 최대양이 넘는 부분수열은 스킵
                continue
            tmp = 0  # 수익 계산
            for honey in subset:
                tmp += honey ** 2
            max_v = max(max_v, tmp)  # 최대 수익 비교 갱신
        return max_v


    tmp = []  # 수익 및 좌표 저장 리스트
    for r in range(N):
        for c in range(N-M+1):
            pick = [arr[r][c+x] for x in range(M)]  # 가로로 채취가능한 꿀통 정보
            profit = choice(pick)
            tmp.append([profit, r,c])  # 수익, 행, 열 저장
    tmp.sort(reverse=True)  # 수익 기준 정렬

    pr, pc = tmp[0][1], tmp[0][2]  # 가장 큰 수익의 좌표
    max_p = tmp[0][0]  # 가장 큰 수익
    for p, r, c in tmp:
        if r == pr and pc-M+1 <= c < pc + M:  # 가장 큰 수익의 벌통과 겹치는 좌표는 스킵
            continue
        max_p += p  # 두 명의 일꾼이 채취 => 한번만 더해주고 브레이크
        break

    print(f'#{tc} {max_p}')



'''
1
4 2 13
6 1 9 7    
9 8 5 8
3 4 5 3
8 2 6 7

'''