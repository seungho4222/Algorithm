# 주사위 입력값 구조
#   A
# B C D E
#   F

# 주사위의 마주보는 면 인덱스
pair = {0:5, 1:3, 2:4, 3:1, 4:2, 5:0}
N = int(input())  # 주사위 개수
arr = [list(map(int, input().split())) for _ in range(N)]
# 출력값인 주사위 옆면의 최대값
max_v = 0
# 주사위 면 개수인 6번 반복
for i in range(6):
    sum_v = 0  # 주사위 옆면 합계
    bottom = arr[0][i]  # 첫번째 주사위 밑 숫자
    up = arr[0][pair[arr[0].index(bottom)]]  # 첫번째 주사위 위 숫자
    # 옆면 가장 큰 숫자 구하고 더해주기
    v = 0
    for k in arr[0]:
        if k != bottom and k != up and v < k:
            v = k
    sum_v += v
    # 두번째 주사위부터 반복해서 쌓기
    for j in range(1,N):
        bottom = up
        up = arr[j][pair[arr[j].index(bottom)]]
        v = 0
        for k in arr[j]:
            if k != bottom and k != up and v < k:
                v = k
        sum_v += v
    # 다 쌓았으면 최대값 비교
    if max_v < sum_v:
        max_v = sum_v
print(max_v)


'''
5
2 3 1 6 5 4
3 1 2 4 6 5
5 6 4 1 3 2
1 3 6 2 4 5
4 1 6 5 2 3

'''