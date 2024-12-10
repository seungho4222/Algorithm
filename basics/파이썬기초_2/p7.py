# 리스트 내포 1 ~ 20 중 3의 배수 및 5의 배수 아닌 숫자들의 제곱값 리스트

result = [i ** 2 for i in range(1, 21) if i % 3 or i % 5]

print(result)