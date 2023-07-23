'''1부터 12까지의 숫자를 원소로 가진 집합 A가 있다. 집합 A의 부분 집합 중 N개의 원소를 갖고 있고, 원소의 합이 K인 부분집합의 개수를 출력.
해당하는 부분집합이 없는 경우 0을 출력한다. 모든 부분 집합을 만들어 답을 찾아도 된다.
예를 들어 N = 3, K = 6 경우, 부분집합은 { 1, 2, 3 } 경우 1가지가 존재한다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  ( 1 ≤ T ≤ 50 )
테스트 케이스 별로 부분집합 원소의 수 N과 부분 집합의 합 K가 여백을 두고 주어진다. ( 1 ≤ N ≤ 12, 1 ≤ K ≤ 100 )

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.
'''

import sys

sys.stdin = open('input.txt', 'r')


A = [e for e in range(1, 13)]   # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
n = len(A)      # 12

T = int(input())    # 테스트 케이스 개수
for test_case in range(1, T + 1):
    N, K = map(int, input().split())    # 조건: 부분집합 원소의 수 N, 원소의 합 K
    subset_count = 0                    # 위의 조건을 만족하는 부분집합 카운트
    for i in range(1<<n):       # 1<<n : 원소가 n개일 경우의 모든 부분집합의 수, 2 ** n
                                # n=3이면, 이진법에서 1을 왼쪽으로 3번 옮긴 1000이 되고 이 값은 10진법의 8 => 2 ** 3
        # subset = []           
        # for j in range(n):
        #     if i & (1<<j):      
        #         subset.append(A[j])
        subset = [A[j] for j in range(n) if i & (1<<j)]     # i & (1<<j) : i에서 j번째 비트가 1인지 아닌지 리턴
        if (len(subset) == N) and (sum(subset) == K):       # 조건 만족 시 카운트
            subset_count += 1

    print(f'#{test_case} {subset_count}')