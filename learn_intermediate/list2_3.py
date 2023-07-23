'''코딩반 학생들에게 이진 탐색을 설명하던 선생님은 이진탐색을 연습할 수 있는 게임을 시켜 보기로 했다.
짝을 이룬 A, B 두 사람에게 교과서에서 각자 찾을 쪽 번호를 알려주면, 이진 탐색만으로 지정된 페이지를 먼저 펼치는 사람이 이기는 게임이다.
예를 들어 책이 총 400쪽이면, 검색 구간의 왼쪽 l=1, 오른쪽 r=400이 되고, 중간 페이지 c= int((l+r)/2)로 계산한다.
찾는 쪽 번호가 c와 같아지면 탐색을 끝낸다.
책의 전체 쪽수와 두 사람이 찾을 쪽 번호가 주어졌을 때, 이진 탐색 게임에서 이긴 사람이 누구인지 알아내 출력하시오. 비긴 경우는 0을 출력한다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1<=T<=50
테스트 케이스 별로 책의 전체 쪽 수 P, A, B가 찾을 쪽 번호 Pa, Pb가 차례로 주어진다. 1<= P, Pa, Pb <=1000

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, A, B, 0 중 하나를 출력한다.
'''

import sys

sys.stdin = open('input.txt', 'r')


def binarySearch(page, search):     # 이진검색 함수 작성
    l, r = 1, page                  # 책 페이지 l(왼쪽) = 1, r(오른쪽) = P 지정
    search_count = 0                # 페이지 검색 카운트
    while l <= r:
        m = int((l+r)/2)            # 중간값 기준 검색
        search_count += 1           # 검색 카운트
        if m == search:
            return search_count
        elif m > search:            # 검색값이 중간값보다 작을 경우
            r = m                       # l < search < m , 따라서 반복문 r값을 m로 변경
        else:                       # 검색값이 중간값보다 클 경우
            l = m                       # m < search < r , 따라서 반복문 l값을 m+1로 변경


T = int(input())    # 테스트 케이스 개수
for test_case in range(1, T + 1):
    P, Pa, Pb = map(int, input().split())
    if binarySearch(P, Pa) < binarySearch(P, Pb):
        print(f'#{test_case} A')
    elif binarySearch(P, Pa) > binarySearch(P, Pb):
        print(f'#{test_case} B')
    else:
        print(f'#{test_case} 0')