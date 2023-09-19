def solution(n, results):
    answer = 0
    arr = [[-1]*n for _ in range(n)]  # -1: 승부를 알 수 없다
    for w, l in results:
        arr[w-1][l-1] = 1  # 1: 행번호가 열번호를 이겼다
        arr[l-1][w-1] = 0  # 0: 행번호가 열번호에게 졌다
    for s in range(n):
        arr[s][s] = 2  # 자기 자신은 무시(임의값 지정)
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if arr[i][k] == 1 and arr[k][j] == 1:  # 다른 승부를 통해 순위를 알수 있다 !
                    arr[i][j] = 1  # i는 j를 이길 수 있다
                    arr[j][i] = 0  # j는 i를 이길 수 없다
    for l in arr:
        if -1 not in l:  # 해당 행은 모든 상대와의 경기 결과 알고 있다
            answer += 1

    return answer


print(solution(5,[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))