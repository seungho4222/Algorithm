# 주사위 입력값 구조
#   A
# B C D E
#   F

pair = {0:5, 1:3, 2:4, 3:1, 4:2, 5:0}
N = int(input())  # 주사위 개수
arr = [list(map(int, input().split()))]
max_v = 0
for i in range(6):
    sum_v = 0
    bottom = arr[0][i]
    up = pair[bottom]
    sum_v += sum(arr[0])-arr[0][bottom]-arr[0][up]
    for j in range(1,6):
        bottom = arr[j].index(arr[j][up])
        up = pair[bottom]
        sum_v += sum(arr[0])-arr[0][bottom]-arr[0][up]
    if max_v < sum_v:
        max_v = sum_v

print(max_v)
