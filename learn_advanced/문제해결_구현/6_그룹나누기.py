import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    # 1~N번까지가 출석번호, M장의 신청서
    N, M = map(int, input().split())
    # M쌍의 번호가 공백으로 구분하여 한줄로 입력 => 1 2 3 4 (1번과2번, 3번과4번)
    nums = list(map(int, input().split()))
    # 인접배열 생성
    arr = [[0]*(N+1) for _ in range(N+1)]
    for i in range(M):
        arr[nums[2*i]][nums[2*i+1]] = 1
        arr[nums[2*i+1]][nums[2*i]] = 1
    # 방문기록
    visited = [0] * (N+1)
    # 출력값
    group = 0
    # 1번부터 N번까지 조사
    for i in range(1, N+1):
        # 방문기록이 있으면 이미 그룹이 있다는 것, 다음 번호로 진행
        if visited[i]: continue
        stack = []      # 스택구현
        visited[i] = 1  # 방문기록
        # 해당 번호와 같은 조인 번호 모두 조사
        while True:
            for j in range(1, N+1):
                # 같은 조인 번호가 방문기록이 없으면, 해당번호를 기준으로 같은 조인 번호 추가 조사
                if arr[i][j] == 1 and visited[j] == 0:
                    stack += [i]    # 스택추가
                    visited[j] = 1  # 방문기록
                    i = j           # 기준번호 변경
                    break
            else:
                if stack:
                    i = stack.pop()
                else: break
        # 같은 조 조사가 끝나면 그룹 + 1
        group += 1

    print(f'#{tc}', group)