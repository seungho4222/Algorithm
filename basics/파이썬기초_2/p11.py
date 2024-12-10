# 사용자로부터 콤마(,)로 구분해 여러 원의 반지름을 입력 받아 이들에 대한 원의 둘레를 계산

from math import pi

r = input()

list_r = r.split(', ')

result = []

for i in list(map(lambda x : 2 * pi * int(x) , list_r)):
    a = round(i, 2)
    result.append(str(a))

print(*result) # a b c d

result2 = ", ".join(result)
print(result2) # a, b, c, d