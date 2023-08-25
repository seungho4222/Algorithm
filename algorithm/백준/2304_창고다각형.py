# from pprint import pprint

N = int(input())  # 기둥의 개수
arr = [[0]*(1001) for _ in range(1001)]  # 1001
# 기둥 입력 => 1
for i in range(N):
    L, H = map(int, input().split())
    for r in range(H):
        arr[r][L] = 1
cnt = 0  # 출력값 cnt
check = 0  # for문 탈출용 체크
for r in range(1001):
    for c in range(1001):
        # 기둥의 옆면이면
        if arr[r][c] == 1:
            # 반대쪽 기둥면 찾아서 그 차이만큼 카운트
            for xc in range(1000,c,-1):
                if arr[r][xc] == 1:
                    cnt += xc - c + 1
                    check = 1
                    break
            # 반대쪽이 없다 -> 기둥이 한개 우뚝 솟았다 -> 카운트 1만
            else:
                cnt += 1
                check = 1
        # 기둥을 만났다면 다음 열 방문 필요 없음
        if check == 1:
            check = 0
            break
print(cnt)
