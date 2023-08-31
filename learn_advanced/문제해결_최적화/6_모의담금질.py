def SA():  # Simulated_Annealing
    global T
    cnt = 0
    while T > T_end:
        cnt += 1
        T *= K
    return cnt


T = int(input())
for tc in range(1, T+1):
    T, T_end, K = map(float, input().split())
    print(f'#{tc} {SA()}')




'''
cost_pre = infinite  # 이전 비용

T = 시작온도

while T > T_end:          # T_end가 될 때까지 반복

    cost_new = cost( )      # 비용 계산

    diff = cost_new - cost_prev    # 새로운 비용과 이전 비용의 차이

    if difference < 0 or  e(-diff/T) > random(0,1):

        cost_pre = cost_new    # 비용이 감소하거나 확률이 랜덤 값보다 더 크면 비용 갱신

    T = T * k                 # k : cooling factor

'''