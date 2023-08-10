import sys

sys.stdin = open('input.txt', 'r')

# 병합 정렬 - 좌우 나누기
def merge_sort(lst):
    global cnt
    # 병합 정렬 - 좌우 합치기
    def merge(l, r):
        result = []
        # 좌우에 원소가 없으면 종료
        while l and r:
            # 좌우 비교하며 작은값부터 저장
            if l[0] <= r[0]:
                result += [l.pop(0)]
            else:
                result += [r.pop(0)]
        # 좌우 중 남은 원소는 가장 큰값이므로 맨 뒤에 추가
        if l:
            result += l
        if r:
            result += r
        return result

    len_lst = len(lst)
    # 원소가 1개 이하면 더이상 나누기 불가
    if len_lst <= 1:
        return lst
    # 길이의 절반으로 좌우 나누기 - 홀수일 경우 오른쪽이 원소 1개 더 많음
    l = lst[:len_lst//2]
    r = lst[len_lst//2:]
    # 원소가 각 1개가 될때까지 계속 나누기
    l = merge_sort(l)
    r = merge_sort(r)
    # 문제의 경우의 수 카운트 - 병합 전 왼쪽 끝값이 오른쪽 끝값보다 큰 경우
    if l[-1] > r[-1]:
        cnt += 1
    # 다 나눴으면 역으로 올라가면서 합치기
    return merge(l, r)


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    L = list(map(int, input().split()))
    cnt = 0
    print(f'#{tc}', merge_sort(L)[len(L)//2], cnt)