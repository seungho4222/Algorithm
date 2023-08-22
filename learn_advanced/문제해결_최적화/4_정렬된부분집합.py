# 시간복잡도
# DP - N ** 2
# 이진탐색 - nlogn

# 최장 증가 수열 - DP접근 알고리즘
def LIS_DP():
    for i in range(len(arr)):
        for j in range(i):
            if (arr[j] < arr[i]) and (1 + LIS[j] > LIS[i]):
                LIS[i] = 1 + LIS[j]
    return max(LIS)

# 이진탐색
def binary_search(num):
    left = 0
    right = len(result) - 1
    while left <= right:
        mid = (left + right) // 2
        if result[mid] >= num:
            right = mid -1
        else: left = mid + 1
    return right + 1


T = int(input())
for tc in range(1, T+1):
    # N: 원소의 개수, arr: 수열
    N, *arr = map(int, input().split())

    # DP접근
    LIS = [1] * N
    print(f'#{tc} {LIS_DP()}')

    # 이진탐색
    result = [0]
    for num in arr:
        if result[-1] < num:
            result += [num]
        else: result[binary_search(num)] = num
    print(f'#{tc} {len(result) - 1}')


'''
3
5 1 5 3 4 2
5 4 3 5 1 2
10 2 9 5 1 10 6 3 4 8 7

#1 3
#2 2
#3 4
'''
