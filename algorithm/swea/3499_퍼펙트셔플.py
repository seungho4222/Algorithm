T = int(input())
for tc in range(1, T+1):
    # 카드 수
    N = int(input())
    # 카드 배열
    cards = list(input().split())


    # # 나누기
    # deck1 = []
    # deck2 = []
    # for i in range(N):
    #     if i < (N+1)//2:
    #         deck1 += [cards[i]]
    #     else:
    #         deck2 += [cards[i]]
    # # 셔플
    # shuffle = []
    # top = -1
    # while top < (N+1)//2:
    #     top += 1
    #     if len(deck1) > top:
    #         shuffle += [deck1[top]]
    #     if len(deck2) > top:
    #         shuffle += [deck2[top]]
    # # print(f'#{tc}', *shuffle)

    
    print(f'#{tc}', end=' ')
    # N이 홀수인 경우 반으로 나눌때 앞이 1개 더 많아야 함
    t = (N+1)//2
    for i in range(t):
        # 반으로 나누고 앞 출력
        print(cards[i], end=' ')
        if i+t < N:
            # 뒤 출력
            print(cards[i+t], end=' ')
    print()
    

'''
3
6
A B C D E F
4
JACK QUEEN KING ACE
5
ALAKIR ALEXSTRASZA DR-BOOM LORD-JARAXXUS AVIANA

'''