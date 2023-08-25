# N은 홀수
# 9 <= N <= 199

case_count = int(input())

if case_count % 2 == 1 and 9 <= case_count <= 199:
    case = [int(i) for i in input().split()]
    num = len(case) // 2
    print(sorted(case)[num])
else:
    print("다시 입력하세요.")
    