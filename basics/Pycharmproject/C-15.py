a = int(input())
def prime_num(a):
    n = 0
    for i in range(2, a + 1):
        if a % i == 0:
            n += 1
    if n == 1:
        return "소수입니다."
    else:
        return "소수가 아닙니다."

result = prime_num(a)
print(result)