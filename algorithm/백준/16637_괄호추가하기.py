# 수식에 괄호를 적절히 추가하여 결과의 최댓값 구하기
N = int(input())  # 수식의 길이
formula = [int(i) if i.isdigit() else i for i in input()]  # 수식

# 연산자 계산
def operator(num1, op, num2):
    if op == '+':
        return num1 + num2
    elif op == '-':
        return num1 - num2
    elif op == '*':
        return num1 * num2

# 괄호 선택 dfs
# idx: 괄호 인덱스, v: 계산결과
def dfs(idx, v):
    global max_v
    # 인덱스가 N이면 더이상 수식에 연산자 없음
    if idx >= N:  # 최대값 비교 후 갱신
        if max_v < v:
            max_v = v
        return
    # 괄호 사용 : 다음 연산자 먼저 계산
    if idx + 3 < N:
        dfs(idx+4, operator(v, formula[idx], operator(formula[idx+1], formula[idx+2], formula[idx+3])))
    # 괄호 미사용 : 순서대로 계산
    dfs(idx+2, operator(v,formula[idx],formula[idx+1]))


max_v = -1e9
if N == 1:
    max_v = formula[0]
else:
    dfs(1, formula[0])
print(max_v)
