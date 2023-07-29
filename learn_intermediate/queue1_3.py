'''N개의 피자를 동시에 구울 수 있는 화덕이 있다. 피자는 치즈가 모두 녹으면 화덕에서 꺼내며, 치즈의 양은 피자마다 다르다.
1번부터 M번까지 M개의 피자를 순서대로 화덕에 넣을 때, 치즈의 양에 따라 녹는 시간이 다르기 때문에 꺼내지는 순서는 바뀔 수 있다.
주어진 조건에 따라 피자를 구울 때, 화덕에 가장 마지막까지 남아있는 피자 번호를 알아내는 프로그램을 작성하시오.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
다음 줄부터 테스트 케이스의 첫 줄에 화덕의 크기 N과 피자 개수 M이 주어지고, 다음 줄에 M개의 피자에 뿌려진 치즈의 양을 나타내는 Ci가 주어진다.
3<=N<=20, N<=M<=100, 1<=Ci<=20

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 번호를 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())            # 화덕 내 최대 피자: N, 피자개수: M
    Ci = map(int, input().split())              # 피자위 치즈양
    pizza = list(map(list, enumerate(Ci, 1)))   # 피자 번호 부여
    bake = [pizza.pop(0) for i in range(N)]     # N만큼 화덕 넣기
    
    while len(bake) != 1:                       # 피자 1개 남을때까지
        if bake[0][1] != 0:                     # 치즈 양이 0이 아니면
            bake[0][1] //= 2                    # 반으로 줄이고
            bake.append(bake.pop(0))            # 뒤로 보내기
        else:
            bake.pop(0)                         # 치즈 0이면 피자 빼기
            if pizza:                           # 남은 피자가 있으면
                pizza[0][1] //= 2               # 치즈 반으로 줄이고 넣기
                bake.append(pizza.pop(0))       # -> 치즈양이 0이 아니면 반으로 줄이고 뒤로 보내기때문!!
    
    print(f'#{tc} {bake[0][0]}')

