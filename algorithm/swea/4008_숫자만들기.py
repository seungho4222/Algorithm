import sys
sys.stdin = open('input.txt', 'r')

# 완전탐색
# calc(연산자 사용 횟수, 중간계산결과, 사용한 연산자 인덱스)
def calc(op_idx, sum_v, op_visited):
    global max_v, min_v
    if op_idx == N-1:  # 수식 완료 시 값 비교
        max_v = max(max_v, sum_v)
        min_v = min(min_v, sum_v)
        return
    dup_check = []  # 해당 인덱스 연산자 중복 재귀 방지
    for i in range(N-1):  # 연산자 수만큼 반복
        if i not in op_visited and op[i] not in dup_check:  # 미방문 연산자 인덱스 / 미사용 연산자
            dup_check.append(op[i])  # 사용 처리
            new_visited = op_visited + [i]  # 방문 처리
            new_sum = sum_v  # 이전 계산 결과값
            if op[i] == '+': new_sum += nums[op_idx+1]
            elif op[i] == '-': new_sum -= nums[op_idx+1]
            elif op[i] == '*': new_sum *= nums[op_idx+1]
            elif op[i] == '/': new_sum /= nums[op_idx+1]; new_sum = int(new_sum)
            calc(op_idx+1, new_sum, new_visited)


T = int(input())
for tc in range(1, T+1):
    N = int(input())  # 숫자 개수
    op_input = list(map(int, input().split()))  # 연산자 개수(+, -, *, / : 순서)
    op = []  # 연산자 저장 / 중복가능 -> 인덱스로 사용할 것
    for i in range(4):
        for j in range(op_input[i]):
            if i == 0: op.append('+')
            elif i == 1: op.append('-')
            elif i == 2: op.append('*')
            elif i == 3: op.append('/')
    nums = list(map(int, input().split()))  # 피연산자 저장
    max_v = -float('inf')  # 수식 최댓값
    min_v = float('inf')  # 수식 최솟값
    calc(0, nums[0], [])
    print(f'#{tc} {max_v-min_v}')