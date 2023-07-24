'''보통의 정렬은 오름차순이나 내림차순으로 이루어지지만, 이번에는 특별한 정렬을 하려고 한다.
N개의 정수가 주어지면 가장 큰 수, 가장 작은 수, 2번째 큰 수, 2번째 작은 수 식으로 큰 수와 작은 수를 번갈아 정렬하는 방법이다.
예를 들어 1부터 10까지 10개의 숫자가 주어지면 다음과 같이 정렬한다.
10 1 9 2 8 3 7 4 6 5
주어진 숫자에 대해 특별한 정렬을 한 결과를 10개까지 출력하시오

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
다음 줄에 정수의 개수 N이 주어지고 다음 줄에 N개의 정수 ai가 주어진다. 10<=N<=100, 1<=ai<=100

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 특별히 정렬된 숫자를 10개까지 출력한다.
'''

import sys

sys.stdin = open('input.txt', 'r')


T = int(input())    # 테스트 케이스 개수
for test_case in range(1, T + 1):
    N = int(input())
    ai = map(int, input().split())      # N개의 정수 ai
    sort_ai = sorted(ai)                # 오름차순 정렬

    sort_result = []                    # 특별한 정렬 리스트
    for i in range(1, 11):              # 10번 반복
        if i % 2 == 1:                  # 홀수이면 큰값 반환
            sort_result.append(sort_ai.pop(-1))
        else:                           # 짝수이면 작은값 반환
            sort_result.append(sort_ai.pop(0))

    print(f'#{test_case}', *sort_result)    # 언팩 리스트는 f-string 내 불가