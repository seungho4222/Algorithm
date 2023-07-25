'''문자열 s에서 반복된 문자를 지우려고 한다. 지워진 부분은 다시 앞뒤를 연결하는데, 만약 연결에 의해 또 반복문자가 생기면 이부분을 다시 지운다.
반복문자를 지운 후 남은 문자열의 길이를 출력 하시오. 남은 문자열이 없으면 0을 출력한다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤ 50
다음 줄부터 테스트 케이스의 별로 길이가 1000이내인 문자열이 주어진다.

[출력]
#과 1번부터인 테스트케이스 번호, 빈칸에 이어 답을 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')


def repeat_str(x):
    check = x[0]                            # 비교할 문자열 저장
    index_num = 0                           # 중복 문자 방지를 위해 인덱스 번호 지정
    for i in x[1:]:                         # 인덱스 1번부터 확인
        if i != check:                    # 문자열 다를 경우
            check = i                       # i를 비교할 문자열로 변경
            index_num += 1                  # 중복 문자 방지를 위해 인덱스 번호 카운트
        else:                             # 문자열 같을 경우 (i와 그 앞의 문자가 같음)
            a = x.index(i, index_num)       # 앞의 문자 인덱스 저장
            del x[a:a+2]                    # 앞의 문자와 i의 인덱스 삭제
            break


T = int(input())  # 테스트 케이스 개수
for test_case in range(1, T + 1):
    string = list(input())
    
    for i in range(len(string)-1):          # 범위 -1인 이유: 문자열 0번 check저장 -> 1번부터 확인
        repeat_str(string)

    print(f'#{test_case} {len(string)}')

