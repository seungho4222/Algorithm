T = 10
for tc in range(1, T + 1):
    dump = int(input())
    box = list(map(int, input().split()))

    arr = [0] * 101
    # 덤프횟수만큼 가장 높은 곳의 박스를 가장 낮은 곳으로 이동
    for i in box:
        arr[i] += 1
    r_arr = arr[::-1]

    result = 0

    while dump:
        for j in range(100,0,-1):
            while r_arr[j]:
                for k in range(1,101):
                    while arr[k]:
                        r_arr[j] -= 1
                        r_arr[k] -= 1
                        dump -= 1
                        result = j - k
    print(f'#{tc}', result)


