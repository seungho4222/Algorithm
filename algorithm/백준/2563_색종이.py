N = int(input())  # 색종이 수
arr = [[0]*100 for _ in range(100)]  # 도화지 배열
# 색종이 수만큼 붙이기
for i in range(N):  
    row, col = map(int, input().split())  # 색종이 왼쪽아래 꼭지점 좌표
    # 색종이 붙인 검은 영역 1 체크
    for r in range(row, row+10):
        for c in range(col, col+10):
            arr[r][c] = 1
# 출력값인 검은 영역
area = 0
for r in range(100):
    for c in range(100):
        if arr[r][c] == 1:
            area += 1
print(area)
