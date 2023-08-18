import sys

sys.stdin = open('input.txt', 'r')


def calc():
    global queue, cnt
    # 문제: 연산결과 백만 이하
    visited = [False] * 1000001
    # 첫 연산 방문 저장
    for i in queue:
        visited[i] = True
    while True:
        save = []
        # 큐에 있는 모든 숫자 범위내 연산 진행
        # 결과값은 임의의 save에 저장 후 방문기록함
        for i in queue:
            # 연산값이 M이면 함수 종료
            if i == M:
                return cnt
            if i+1 <= 1000000 and not visited[i+1]:
                save += [i+1]
                visited[i+1] = True
            if i-1 and not visited[i-1]:
                save += [i-1]
                visited[i-1] = True
            if i*2 <= 1000000 and not visited[i*2]:
                save += [i*2]
                visited[i*2] = True
            if i-10 and not visited[i-10]:
                save += [i-10]
                visited[i-10] = True
        # save는 큐로 변경후 다시 연산 진행, 카운트는 + 1
        queue = save
        cnt += 1


T = int(input())
for tc in range(1, T+1):
    # 자연수 N을 몇번의 연산을 통해 M으로 만들기
    N, M = map(int, input().split())
    # 연산 [+1, -1, *2, -10] 4가지
    if N > 10:
        queue = [N+1, N-1, N*2, N-10]
    else:
        queue = [N+1, N-1, N*2]
    # 문제: N과 M은 다르므로 첫 연산 구한 후 카운트 1부터 시작
    cnt = 1
    print(f'#{tc}', calc())
