# 빙고판
arr = [list(map(int, input().split())) for _ in range(5)]
# 사회자가 부르는 숫자 순서
nums = []
for i in range(5):
    nums += list(map(int, input().split()))

# 숫자 체크
def check(num):
    for r in range(5):
        for c in range(5):
            if arr[r][c] == num:
                arr[r][c] = 0
                return

# 빙고 검사
def bingo():
    cnt = 0
    # 가로 체크
    for r in range(5):
        c = 0
        while c < 5:
            if arr[r][c] != 0:
                break
            c += 1
        if c == 5:
            cnt += 1
    # 세로 체크
    for c in range(5):
        r = 0
        while r < 5:
            if arr[r][c] != 0:
                break
            r += 1
        if r == 5:
            cnt += 1
    # 대각선 체크
    r, c = 0, 0
    while r < 5 and c < 5:
        if arr[r][c] != 0:
            break
        r += 1
        c += 1
    if r == 5:
        cnt += 1
    
    # 역대각선 체크
    r, c = 0, 4
    while r < 5 and c > -1:
        if arr[r][c] != 0:
            break
        r += 1
        c -= 1
    if r == 5:
        cnt += 1
    
    # 반환
    if cnt >= 3:
        return True
    else: False

# 숫자 체크하며 검사
for i in range(25):
    check(nums[i])
    if i >= 11:
        if bingo():
            print(i+1)
            break


'''
11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15

'''