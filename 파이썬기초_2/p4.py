# 정수입력시 리스트 내포를 이용해 약수 리스트를 출력

digit = int(input())

result = [i for i in range(1, digit + 1) if digit % i == 0]

print(result)