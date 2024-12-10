from random import random, uniform, randrange, choice, choices, sample, shuffle

print(random()) # 0.0 <= N < 1.0 부동소수점 난수 N 반환
print(uniform(1.0, 10.0)) # 지정된 범위 내의 부동소수점 난수 N 반환

start, stop, step = 1, 45, 2

print(randrange(1, 45))
print(randrange(45))
print(randrange(1, 45, 2))

data_list = [1, 2, 3, 4, 5]

print(choice(data_list)) # 1개 뽑기
print(choices(data_list, k=2)) # k개 뽑기, 중복 허용
print(sample(data_list, k=2)) # k개 뽑기, 중복 불허

shuffle(data_list) # 원본 순서 뒤바꿈
print(data_list)
