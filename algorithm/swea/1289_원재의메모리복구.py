T = int(input())
for tc in range(1, T+1):
    # 초기화 전 메모리
    memory = input()
    # 메모리 변경 기준 (0 <=> 1)
    temp = 0
    # 수정 횟수
    cnt = 0
    for i in memory:
        if int(i) != temp:
            cnt += 1
            temp = (temp + 1) % 2
    print(f'#{tc} {cnt}')