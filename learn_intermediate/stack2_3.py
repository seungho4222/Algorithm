'''사다리 게임이 지겨워진 알고리즘 반 학생들이 새로운 게임을 만들었다. 가위바위보가 그려진 카드를 이용해 토너먼트로 한 명을 뽑는 것이다. 게임 룰은 다음과 같다.
1번부터 N번까지 N명의 학생이 N장의 카드를 나눠 갖는다. 전체를 두 개의 그룹으로 나누고, 그룹의 승자끼리 카드를 비교해서 이긴 사람이 최종 승자가 된다.
그룹의 승자는 그룹 내부를 다시 두 그룹으로 나눠 뽑는데, i번부터 j번까지 속한 그룹은 파이썬 연산으로 다음처럼 두개로 나눈다.
두 그룹이 각각 1명이 되면 양 쪽의 카드를 비교해 승자를 가리고, 다시 더 큰 그룹의 승자를 뽑는 방식이다.
숫자 1은 가위, 2는 바위, 3은 보를 나타낸다. 만약 같은 카드인 경우 편의상 번호가 작은 쪽을 승자로 하고, 처음 선택한 카드는 바꾸지 않는다.
N명이 학생들이 카드를 골랐을 때 1등을 찾는 프로그램을 만드시오.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
다음 줄부터 테스트 케이스의 별로 인원수 N과 다음 줄에 N명이 고른 카드가 번호순으로 주어진다. 4≤N≤100
카드의 숫자는 각각 1은 가위, 2는 바위, 3은 보를 나타낸다.

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 1등의 번호를 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')

# other
def win(i, j):              # 가위바위보
    if arr[i] == arr[j]:    # 비긴 경우
        return i
    elif arr[i] == 1:       # 가위를 낸 경우
        if arr[j] == 2:     # 가위 vs 바위
            return j
        else:               # 가위 vs 보
            return i
    elif arr[i] == 2:       # 바위를 낸 경우
        if arr[j] == 1:     # 바위 vs 가위
            return i
        else:               # 바위 vs 보
            return j
    else:                   # 보를 낸 경우
        if arr[j] == 1:     # 보 vs 가위
            return j
        else:               # 보 vs 바위
            return i


def tournament(i, j):   # 대진 짜기
    if i == j:            # 1명 남았을 경우 => 가위바위보 하러 간다
        return i
    else:               # 조 편성하기
        left = tournament(i, (i+j)//2)
        right = tournament((i+j)//2+1, j)
        return win(left, right)


T = int(input())
for tc in range(1, 1 + T):
    N = int(input())
    arr = [0] + list(map(int, input().split()))
    print(f'#{tc} {tournament(1, N)}')



# # me
# def game(x, y):
#     if x[1] == 1:
#         if y[1] == 1 or y[1] == 3:
#             return x
#         else:
#             return y
#     elif x[1] == 2:
#         if y[1] == 1 or y[1] == 2:
#             return x
#         else:
#             return y
#     elif x[1] == 3:
#         if y[1] == 2 or y[1] == 3:
#             return x
#         else:
#             return y
        

# T = int(input())  # 테스트 케이스 개수
# for tc in range(1, T + 1):
#     N = int(input())
#     card = list(enumerate((map(int, input().split())), 1))
    
#     while True:
#         if len(card) == 2:  
#             print(f'#{tc} {game(card[0], card[1])[0]}')
#             break

#         group1 = card[:len(card)//2]
#         group2 = card[len(card)//2:]
#         del card[:]

#         if len(group1) % 2 == 0:
#             for i in range(0,len(group1)//2,2):
#                 card.append(game(group1[i], group1[i+1]))
#         else:
#             for i in range(0,len(group1)//2,2):
#                 card.append(game(group1[i], group1[i+1]))
#             card.append(group1[-1])

#         if len(group2) % 2 == 0:
#             for i in range(0,len(group2)//2,2):
#                 card.append(game(group2[i], group2[i+1]))
#         else:
#             for i in range(0,len(group2)//2,2):
#                 card.append(game(group2[i], group2[i+1]))
#             card.append(group2[-1])


# # chatGPT
# def game(x, y):
#     if x[1] == y[1]:  # 비긴 경우는 번호가 작은 카드를 반환
#         return x if x[0] < y[0] else y
#     elif x[1] == 1:  # 가위
#         return x if y[1] == 3 else y
#     elif x[1] == 2:  # 바위
#         return x if y[1] == 1 else y
#     elif x[1] == 3:  # 보
#         return x if y[1] == 2 else y

# T = int(input())  # 테스트 케이스 개수
# for tc in range(1, T + 1):
#     N = int(input())
#     card = list(enumerate((map(int, input().split())), 1))
    
#     while True:
#         if len(card) == 2:  
#             print(f'#{tc} {game(card[0], card[1])[0]}')
#             break

#         next_round = []
#         if len(card) % 2 == 0:
#             for i in range(0, len(card), 2):
#                 winner = game(card[i], card[i+1])
#                 next_round.append(winner)
#         else:
#             for i in range(0, len(card)-1, 2):
#                 winner = game(card[i], card[i+1])
#                 next_round.append(winner)
#             next_round.append(card[-1])

#         card = next_round