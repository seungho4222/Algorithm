import sys

sys.stdin = open('input.txt', 'r')

# 병합 정렬 - 좌우 나누기
def merge_sort(lst):
    len_lst = len(lst)
    # 원소가 1개 이하면 더이상 나누기 불가
    if len_lst <= 1:
        return lst
    # 길이의 절반으로 좌우 나누기
    l = lst[:len_lst//2]
    r = lst[len_lst//2:]
    # 원소가 각 1개가 될때까지 계속 나누고, 다 나눴으면 역으로 올라가면서 합치기
    return merge(merge_sort(l), merge_sort(r))

# 병합 정렬 - 좌우 합치기
def merge(l, r):
    global cnt
    # 문제의 경우의 수 카운트 - 병합 전 왼쪽 끝값이 오른쪽 끝값보다 큰 경우
    if l[-1] > r[-1]:
        cnt += 1
    # 시간초과 방지로 미리 변수 지정
    lenl = len(l)
    lenr = len(r)
    # 좌우 인덱스
    li = 0
    ri = 0
    # 병합한 리스트, 병합용 인덱스
    result = [0] * (lenl + lenr)
    idx = 0
    # 좌우에 원소가 없으면 종료
    while li < lenl or ri < lenr:
        if li < lenl and ri < lenr:
            if l[li] <= r[ri]:
                result[idx] = l[li]
                li += 1
                idx += 1
            else:
                result[idx] = r[ri]
                ri += 1
                idx += 1
        # 좌우 중 남은 원소는 가장 큰값이므로 맨 뒤에 추가
        elif li < lenl:
            result[idx] = l[li]
            li += 1
            idx += 1
        elif ri < lenr:
            result[idx] = r[ri]
            ri += 1
            idx += 1
    return result


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    L = list(map(int, input().split()))
    cnt = 0
    print(f'#{tc}', merge_sort(L)[N//2], cnt)