'''ABBA처럼 어느 방향에서 읽어도 같은 문자열을 회문이라 한다. NxN 크기의 글자판에서 길이가 M인 회문을 찾아 출력하는 프로그램을 만드시오.
회문은 1개가 존재하는데, 가로 뿐만 아니라 세로로 찾아질 수도 있다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
다음 줄부터 테스트케이스의 첫 줄에 N과 M이 주어진다. 10≤N≤100, 5≤M≤N
다음 줄부터 N개의 글자를 가진 N개의 줄이 주어진다.

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')


T = int(input())  # 테스트 케이스 개수
for test_case in range(1, T + 1):
    N, M = map(int, input().split())        # N x N 글자판, 회문길이 M
    matrix = [input() for i in range(N)]

    for row in matrix:                                  # 가로열 회문 확인
        for i in range(len(row) - M + 1):               # 가로열 내 회문 길이만큼 반복 체크
            if row[i:M+i] == row[i:M+i][::-1]:          # 회문 체크
                print(f'#{test_case}', row[i:M+i])
        
    for r in range(N):                                  # 세로열 회문 확인
        column = ''
        for c in range(N):
            column += matrix[c][r]                      # 세로열 문자 생성
        for i in range(len(column) - M + 1):            # 세로열 내 회문 길이만큼 반복 체크
            if column[i:M+i] == column[i:M+i][::-1]:    # 회문 체크
                print(f'#{test_case}', column[i:M+i])