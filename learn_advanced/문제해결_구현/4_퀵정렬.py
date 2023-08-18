import sys

sys.stdin = open('input.txt', 'r')

# 정렬 후 피봇 반환
def partition(arr, l, r):
    # 맨 왼쪽값 피봇 설정
    pivot = arr[l]
    # 왼쪽부터 비교(피봇다음 값)
    i = l + 1
    # 오른쪽부터 비교
    j = r
    # i와 j가 교차할때까지 반복
    while i <= j:
        # 피봇보다 큰값 나올때까지 이동
        while i <= j and arr[i] <= pivot:
            i += 1
        # 피봇보다 작은 값 나올때까지 이동
        while i <= j and arr[j] >= pivot:
            j -= 1
        # 피봇값 기준 좌우정렬을 위해 i와j 교환 - 교환후 i 왼쪽으로는 피봇보다 작은값들, j 오른쪽으로는 큰값들
        if i <= j:
            arr[i], arr[j] = arr[j], arr[i]
    # i와 j가 교차하면 해당 j값으로 피봇값 교환 - 바뀐 피봇값 기준 왼쪽은 작은값들 오른쪽은 큰값들로 정렬됨
    arr[l], arr[j] = arr[j], arr[l]
    # 정렬 기준값 반환
    return j

# 정렬
def quick_sort(arr, l, r):
    if l < r:
        # 정렬 후 기준값 받기
        pivot = partition(arr, l, r)
        # 정렬 후 피봇 왼쪽값만 정렬 진행
        quick_sort(arr, l, pivot - 1)
        # 정렬 후 피봇 오른쪽값만 정렬 진행
        quick_sort(arr, pivot + 1, r)
    return arr
    

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    L = list(map(int, input().split()))

    quick_sort(L, 0, len(L)-1)

    print(f'#{tc} {L[N//2]}')