a, b = map(int, input().split())

# for 문
# gcd = 1
# if a > b:
#     for i in range(2, b+1):
#         if a % i == 0 and b % i == 0:
#             gcd = i
# else:
#     for i in range(2, a+1):
#         if a % i == 0 and b % i == 0:
#             gcd = i
# lcm = a * b // gcd
# print(gcd)
# print(lcm)


# 유클리드 호제법
def gcd(x,y):
    while y:
        x, y = y, x % y
    return x      

lcm = a * b // gcd(a,b)

print(gcd(a,b))
print(lcm)
