'''Forth라는 컴퓨터 언어는 스택 연산을 기반으로 하고 있어 후위 표기법을 사용한다.
Forth 코드의 연산 결과를 출력하는 프로그램을 만드시오. 만약 형식이 잘못되어 연산이 불가능한 경우 'error'를 출력한다.

[입력]
첫 줄에 테스트 케이스 개수 T가 주어진다.  1≤T≤50
다음 줄부터 테스트 케이스의 별로 정수와 연산자가 256자 이내의 연산코드가 주어진다.
피연산자와 연산자는 여백으로 구분되어 있으며, 코드는 '.'로 끝난다. 나눗셈의 경우 항상 나누어 떨어진다.

[출력]
#과 1번부터인 테스트케이스 번호, 빈칸에 이어 계산결과를 정수로 출력하거나 또는 'error'를 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')

# eval 함수 사용
T = int(input())  # 테스트 케이스 개수
for test_case in range(1, T + 1):
    code = input().split()

    stack = []
    for i in code:
        if i == '.':
            if len(stack) == 1:
                print(f'#{test_case} {stack.pop()}')
            else:
                print(f'#{test_case} error')
                break
        elif i.isdigit():
            stack.append(i)
        else:
            if len(stack) >= 2:
                cal = eval(stack.pop(-2)+i+stack.pop(-1))
                stack.append(str(cal))
            else:
                print(f'#{test_case} error')
                break

# eval 함수 미사용
T = int(input())  # 테스트 케이스 개수
for test_case in range(1, T + 1):
    code = input().split()

    stack = []
    for i in code:
        if i == '.':
            if len(stack) == 1:
                print(f'#{test_case} {stack.pop()}')
            else:
                print(f'#{test_case} error')
                break
        elif i.isdigit():
            stack.append(i)
        else:
            if len(stack) >= 2:
                num1 = int(stack.pop(-2))
                num2 = int(stack.pop(-1))
                if i == '+':
                    stack.append(num1+num2)
                elif i == '-':
                    stack.append(num1-num2)
                elif i == '*':
                    stack.append(num1*num2)
                elif i == '/':
                    stack.append(num1//num2)
  
            else:
                print(f'#{test_case} error')
                break