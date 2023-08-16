import sys

sys.stdin = open('input.txt', 'r')

# 보호 필름 성능 검사
def p_test(film):
    for c in range(W):
        cnt = 1
        for r in range(1, D):
            if film[r][c] == film[r-1][c]:
                cnt += 1
                # 합격 기준이상이면 해당열 통과
                if cnt >= K:
                    break
            else:
                cnt = 1
                # 남은 열이 다 같아도 합격기준 안되면 브레이크
                if D - r < K:
                    break
        if cnt < K:
            return False
    return True


# 약품 투입
# cnt: 약품투입횟수, start: 약품투입 행
def dfs(cnt, start, film):
    global ans
    # 최소투입횟수 이상이면 탐색 불필요
    if cnt >= ans:
        return
    # 검사 통과했으면 출력값 갱신
    if p_test(film):
        if ans > cnt:
            ans = cnt
            return
    else:
        for i in range(start, D):
            switched = []
            # 약품 바꿔주고 해당 열 저장
            for j in range(W):
                if film[i][j] == 1:
                    film[i][j] = 0
                    switched.append(j)
            # 약품 투입 후 다음 행 dfs
            dfs(cnt+1, i+1, film)
            # 약품 바꿔 준 열 복구
            for j in switched:
                film[i][j] = 1
        # 위에는 A, 아래는 B
            switched = []
            for j in range(W):
                if film[i][j] == 0:
                    film[i][j] = 1
                    switched.append(j)
            dfs(cnt+1, i+1, film)
            for j in switched:
                film[i][j] = 0



T = int(input())
for tc in range(1, T+1):
    # D:두께, W:가로크기, K:합격기준
    D, W, K = map(int, input().split())
    # 특성 A = 0, 특성 B = 1
    film = [list(map(int, input().split())) for _ in range(D)]
    # 출력값인 약품 최소 투입횟수
    ans = K
    # 합격기준 1이면 검사 불필요
    if K == 1:
        print(f'#{tc} 0')
    else:
        dfs(0,0,film)
        print(f'#{tc} {ans}')