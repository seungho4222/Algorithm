# 톱니바퀴 배열
gear = [[3, 2, 5, 3],
        [7, 6, 1, 6],
        [4, 9, 2, 7]]
# 톱니바퀴 회전 입력값
rotation = list(map(int, input().split()))
# 톱니바퀴 회전시 원상복귀 고려한 처음 기준 회전 카운트
count = 0
for i in list(enumerate(rotation, 1)):
    if i[0] % 2 == 1:
        count += i[1]       # 짝수 번째 톱니바퀴는 카운트 +
    else:                   
        count -= i[1]       # 홀수 번째 톱니바퀴는 카운트 -

def positive(x):
    global gear
    for k in range(abs(x)):         # 처음 기준 회전 수
        matrix = [[0] * len(gear[0]) for i in range(len(gear))]     # 이동한 톱니바퀴번호 저장
        if x > 0:   # 짝수 톱니바퀴 아래로, 홀수 톱니바퀴 위로
            for i in range(len(gear)):
                for j in range(len(gear[i])):
                    if i == 0:      # 최상단 톱니바퀴 번호
                        if j % 2 == 0:
                            matrix[i][j] = gear[len(gear)-1][j]
                        else:
                            matrix[i][j] = gear[i+1][j]
                    elif i == len(gear)-1:      # 최하단 톱니바퀴 번호
                        if j % 2 == 0:
                            matrix[i][j] = gear[i-1][j]
                        else:
                            matrix[i][j] = gear[0][j]
                    else:                       # 중간 톱니바퀴 번호
                        if j % 2 == 0:
                            matrix[i][j] = gear[i-1][j]
                        else:
                            matrix[i][j] = gear[i+1][j]
        elif x < 0:     # 홀수 톱니바퀴 아래로, 짝수 톱니바퀴 위로
            for i in range(len(gear)):
                for j in range(len(gear[i])):
                    if i == 0:
                        if j % 2 == 0:
                            matrix[i][j] = gear[i+1][j]
                        else:
                            matrix[i][j] = gear[len(gear)-1][j]
                    elif i == len(gear)-1:
                        if j % 2 == 0:
                            matrix[i][j] = gear[0][j]
                        else:
                            matrix[i][j] = gear[i-1][j]
                    else:
                        if j % 2 == 0:
                            matrix[i][j] = gear[i+1][j]
                        else:
                            matrix[i][j] = gear[i-1][j]
        gear = matrix       # 기어 최신화

positive(count)

for i in range(len(gear)):
    print(''.join(list(map(str, gear[i]))))