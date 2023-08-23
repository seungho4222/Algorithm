N = int(input())  # 스위치 개수
switch = list(map(int, input().split()))  # 스위치 상태
students = int(input())  # 학생 수
# 학생 수만큼 반복
for i in range(students):
    # s: 성별, num: 스위치번호
    s, num = map(int, input().split())
    # 남자일때
    if s == 1:
        # 배수 저장값
        temp = num
        # 배수 스위치 변경
        while num - 1 < N:
            switch[num-1] = (switch[num-1] + 1) % 2
            num += temp
    # 여자일때
    elif s == 2:
        # 스위치번호 변경
        switch[num-1] = (switch[num-1] + 1) % 2
        # 앞뒤 계산용
        k = 1
        # 앞뒤가 범위 안에 있고 스위치 상태 같으면 스위치 변경하고 k + 1
        while True:
            if 0 <= num - 1 - k and num - 1 + k < N and switch[num-1-k] == switch[num-1+k]:
                switch[num-1-k] = (switch[num-1-k] + 1) % 2
                switch[num-1+k] = (switch[num-1+k] + 1) % 2
                k += 1
            else:
                break
for i in range(0, N, 20):
    print(*switch[i:i+20])


'''
8
0 1 0 1 0 0 0 1
2
1 3
2 3

'''