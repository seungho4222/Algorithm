# 숫자 입력값의 각 자릿수의 합을 구해라

digit = str(input())

list_digit = [int(i) for i in digit]

print(sum(list_digit))