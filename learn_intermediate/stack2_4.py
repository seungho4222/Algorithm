'''NxN 배열에 숫자가 들어있다. 한 줄에서 하나씩 N개의 숫자를 골라 합이 최소가 되도록 하려고 한다. 단, 세로로 같은 줄에서 두 개 이상의 숫자를 고를 수 없다.
조건에 맞게 숫자를 골랐을 때의 최소 합을 출력하는 프로그램을 만드시오.
예를 들어 다음과 같이 배열이 주어진다.
 2 (1) 2
(5) 8  5
 7  2 (2)   이경우 1, 5, 2를 고르면 합이 8로 최소가 된다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
다음 줄부터 테스트 케이스의 첫 줄에 숫자 N이 주어지고, 이후 N개씩 N줄에 걸쳐 10보다 작은 자연수가 주어진다. 3≤N≤10

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 합계를 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')

# other
def section_sum(idx, total):
    global answer

    if idx == N:        # N개 합과 최소값 비교
        if total < answer:
            answer = total
            return

    if total > answer:  # 최소값보다 커지면 바로 스킵
        return

    for i in range(N):      # 시작 행 번호
        if i not in visited:
            visited.append(i)   # 방문기록 (중복열 방지)
            section_sum(idx+1, total+matrix[idx][i])    # 재귀함수로 다음 행 번호 추출
            visited.pop()   # N개 합 반환 후, 방문기록 반환

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    matrix = [list(map(int, input().split())) for _ in range(N)]
    answer = 30
    visited = []    # 방문기록 이 N개가 되면 그 원소들이 matrix의 행별 열값
    section_sum(0, 0)   # 0행(첫번째행)부터 시작, 토탈값 초기화후 시작
    print('#{} {}'.format(tc, answer))