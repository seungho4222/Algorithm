dr = [0, -1, 0, 1, 0]
dc = [0, 0, 1, 0, -1]

T = int(input())
for tc in range(1, T+1):
    M, A = map(int, input().split())  # M: 이동시간, A: BC개수
    a_move = [0] + list(map(int, input().split()))  # 사용자A 이동정보
    b_move = [0] + list(map(int, input().split()))  # 사용자B 이동정보
    arr = [[[]*11 for _ in range(11)] for _ in range(11)]  # 배열 (1,1) ~ (10,10) 사용
    for i in range(A):  # BC 범위 내 배열이면 (BC 인덱스 번호, 충전량) 추가
        col, row, co, p = map(int, input().split())  # 열, 행, 범위, 충전량
        for r in range(1, 11):
            for c in range(1, 11):
                if abs(r-row) + abs(c-col) <= co:  # 범위에 속하면
                    arr[r][c].append((i,p))  # 정보 추가하고
                    arr[r][c].sort(key=lambda x: x[1], reverse=True)  # 충전량 순 정렬
    result = 0  # 출력값인 충전량의 합
    ar, ac = 1, 1  # 사용자A 출발지점
    br, bc = 10, 10  # 사용자B 출발지점
    for i in range(M+1):
        ar, ac = ar + dr[a_move[i]], ac + dc[a_move[i]]
        br, bc = br + dr[b_move[i]], bc + dc[b_move[i]]
        # a 먼저 충전량 저장
        ans1, idx = 0, -1
        for j in arr[ar][ac]:
            ans1 += j[1]
            idx = j[0]
            break
        for j in arr[br][bc]:
            if idx != j[0]:
                ans1 += j[1]
                break
        # b 먼저 충전량 저장
        ans2, idx = 0, -1
        for j in arr[br][bc]:
            ans2 += j[1]
            idx = j[0]
            break
        for j in arr[ar][ac]:
            if idx != j[0]:
                ans2 += j[1]
                break
        result += max(ans1, ans2)

        # if not arr[ar][ac] and not arr[br][bc]:  # BC없으면 스킵
        #     continue
        # elif arr[ar][ac] and not arr[br][bc]:  # A만 충전가능하면 충전량 추가
        #     result += arr[ar][ac][0][1]
        # elif not arr[ar][ac] and arr[br][bc]:  # B만 충전가능하면 충전량 추가
        #     result += arr[br][bc][0][1]
        # else:  # 둘다 충전 가능한 경우우
        #     al = len(arr[ar][ac])
        #     bl = len(arr[br][bc])
        #     if arr[ar][ac][0][0] != arr[br][bc][0][0]:  # 최대 충전량의 BC가 다르면 각각 충전량 추가
        #         result += arr[ar][ac][0][1] + arr[br][bc][0][1]
        #     else:  # 같을 경우 길이 확인하여 첫번째, 두번째 충전량 비교해가며 추가
        #         if al > 1 and bl == 1:
        #             result += arr[ar][ac][1][1]+arr[br][bc][0][1]
        #         elif al == 1 and bl > 1:
        #             result += arr[ar][ac][0][1]+arr[br][bc][1][1]
        #         elif al > 1 and bl > 1:
        #             result += max(arr[ar][ac][0][1]+arr[br][bc][1][1], arr[ar][ac][1][1]+arr[br][bc][0][1])
        #         else:
        #             result += arr[ar][ac][0][1]

    print(f'#{tc}', result)
        


'''
1
20 3
2 2 3 2 2 2 2 3 3 4 4 3 2 2 3 3 3 2 2 3
4 4 1 4 4 1 4 4 1 1 1 4 1 4 3 3 3 3 3 3
4 4 1 100
7 10 3 40
6 3 2 70

#1 1200
#2 3290
#3 16620
#4 40650
#5 52710
'''