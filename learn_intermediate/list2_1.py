'''그림과 같이 인덱스가 있는 10x10 격자에 빨간색과 파란색을 칠하려고 한다.
N개의 영역에 대해 왼쪽 위와 오른쪽 아래 모서리 인덱스, 칠할 색상이 주어질 때, 칠이 끝난 후 색이 겹쳐 보라색이 된 칸 수를 구하는 프로그램을 만드시오.
주어진 정보에서 같은 색인 영역은 겹치지 않는다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.   ( 1 ≤ T ≤ 50 )
다음 줄부터 테스트케이스의 첫 줄에 칠할 영역의 개수 N이 주어진다. ( 2 ≤ N ≤ 30 )
다음 줄에 왼쪽 위 모서리 인덱스 r1, c1, 오른쪽 아래 모서리 r2, c2와 색상 정보 color가 주어진다. ( 0 ≤ r1, c1, r2, c2 ≤ 9 )
color = 1 (빨강), color = 2 (파랑)

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 답을 출력한다.
'''

import sys

sys.stdin = open('input.txt', 'r')


T = int(input())    # 테스트 케이스 개수
for test_case in range(1, T + 1):
    N = int(input())    # 칠할 영역의 개수
    
    matrix_red = [[0] * 10 for _ in range(10)]      # 독립적인 리스트 생성
    matrix_blue = [[0] * 10 for _ in range(10)]     # [[0]*10]*10으로 리스트 생성시 모든 행이 동일한 리스트를 가리키고 있기 때문에
    for n in range(N):                              # 해당 열의 값 변경시 다른 행의 값도 함께 변경됨!!!
        r1, c1, r2, c2, color = map(int, input().split())

        for r in range(r1, r2+1):
            for c in range(c1, c2+1):
                if color == 1:
                    matrix_red[r][c] = color
                elif color == 2:
                    matrix_blue[r][c] = color
    
    purple_area = 0
    for i in range(10):
        for j in range(10):
            if matrix_red[i][j] + matrix_blue[i][j] == 3:   # 동일한 행렬값을 더했을때 보라색이 되는 경우
                purple_area += 1

    print(f'#{test_case} {purple_area}')