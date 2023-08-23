K = int(input())  # 1제곱당 참외 수
# 동: 1, 서: 2, 남: 3, 북: 4
arr = [list(map(int, input().split())) for _ in range(6)]
# 가로 세로가 최대값인 배열 입력 순서 구하기
r_idx = 0
c_idx = 0
# 인덱스 구하기 위한 최대값 저장
max_r = 0
max_c = 0
# 최대값 인덱스 구하기
for i in range(6):
    if arr[i][0] == 1 or arr[i][0] == 2:
        if max_r < arr[i][1]:
            max_r = arr[i][1]
            r_idx = i
    else:
        if max_c < arr[i][1]:
            max_c = arr[i][1]
            c_idx = i

# 사각형 2개 계산
# 가로 세로 최대값 인덱스가 0,5 또는 2,3인 경우 큰 사각형에서 작은 사각형 빼주기
if (r_idx == 0 and c_idx == 5) or (r_idx == 5 and c_idx == 0):
    result = (arr[0][1] * arr[5][1]) - (arr[2][1] * arr[3][1])
elif (r_idx == 2 and c_idx == 3) or (r_idx == 3 and c_idx == 2):
    result = (arr[2][1] * arr[3][1]) - (arr[0][1] * arr[5][1])
# 아니면 사각형 2개 더해주기
else:
    result = (arr[0][1] * arr[5][1]) + (arr[2][1] * arr[3][1])
# 참외 수 곱해서 출력
print(K*result)


'''
7
4 50
2 160
3 30
1 60
3 20
1 100

'''