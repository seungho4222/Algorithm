import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M, K = map(int, input().split())
    arr = list(map(int, input().split()))
    
    start = 0   # M번째 칸 확인하기 위한 스타트 인덱스
    for _ in range(K):  # K번 반복
        if start + M > len(arr):    # 배열을 벗어날 경우 -> 인덱스 0부터 이어서 계산(길이로 나눈 나머지값)
            arr.insert((start+M) % len(arr), arr[(start+M) % len(arr) - 1] + arr[(start+M) % len(arr)])
            start = (start+M) % (len(arr)-1)    # 위에서 insert한 값만큼 길이 -1
        elif start + M == len(arr):     # 끝에 삽입할 경우 인덱스 0번과 덧셈
            arr.insert(start+M, arr[start+M-1] + arr[0])
            start = -1  # 마지막인덱스부터 시작함, 카운트 -1 지정
        else:
            arr.insert(start+M, arr[start+M-1] + arr[start+M])  # 삽입인덱스 앞,뒤 덧셈
            start += M  # 스타트 M칸 증가

    print(f'#{tc}', *arr[::-1][:10])
