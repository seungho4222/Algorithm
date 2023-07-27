test_case = int(input())

for i in range(test_case):
    case = [int(digit) for digit in input().split(" ")]
    print(f"#{i+1} {max(case)}")