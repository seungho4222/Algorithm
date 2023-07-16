test_case = int(input())

for i in range(test_case):
    case = [int(i) for i in input().split(" ")]
    sum = 0
    for j in case:
        if j % 2 == 1:
            sum += j
    print("#{0} {1}".format(i+1, sum))