# 리스트 객체가 주어졌을 때, 짝수만 항목으로 가지는 리스트 객체 생성 코드

list_a = [1, 3, 11, 15, 23, 28, 37, 52, 85, 100]

list_even = [i for i in list_a if i % 2 == 0]

print(list_even)