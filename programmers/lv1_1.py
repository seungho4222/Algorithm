''' 기사단원의 무기
# 1 <= number <= 100,000
# 2 <= limit <= 100
# 1 <= power <= limit
'''

def solution(number, limit, power):
    answer = 0
    for i in range(1, number+1):
        prime_num = []
        for j in range(1, i+1):
            if i % j == 0:
                prime_num.append(j)
        if len(prime_num) > limit:
            answer += power
        else:
            answer += len(prime_num)
    return answer

result = solution(10, 3, 2)

print(result)