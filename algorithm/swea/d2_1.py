# 백만장자 만들기

import sys

sys.stdin = open('input.txt', 'r')


# T = int(input())
# for t in range(1, T + 1):
#     N = int(input())
#     price = list(map(int, input().split()))

#     money = 0
#     count = 0
#     for i in range(N-1):
#         if (price[i] < price[i+1]) or (price[i] == price[i+1] and (price.index(price[i]) < price.index(max(price)))):
#             money -= price[i]
#             count += 1
#         elif (price[i] > price[i+1]) and (price.index(price[i]) < price.index(max(price))):
#             money -= price[i]
#             count += 1
#         elif price[i] > price[i+1]:
#             money += price[i] * count
#             count = 0
#             price[i] = 0
#     if count != 0:
#         money += price[-1] * count

#     print(f'#{t} {money}')

T = int(input())
for test_case in range(1, T + 1):
    N=int(input())
    N_list=list(map(int,input().split()))
    max_value = N_list[-1]
    profit=0

    for i in range(N-2, -1, -1):
        if N_list[i] >= max_value:
            max_value = N_list[i]
        else:
            profit += max_value - N_list[i]
    print('#{} {}'.format(test_case, profit))