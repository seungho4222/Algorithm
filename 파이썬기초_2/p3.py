# 정수 입력 시 약수를 리스트에 추가해 출력하기

digit = int(input())

divisor = []

for i in range(1, digit + 1):
    if digit % i == 0:
        divisor.append(i)

print(divisor)
