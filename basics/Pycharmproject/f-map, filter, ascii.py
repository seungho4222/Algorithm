# _*_ cording: utf-8 _*_

# map(함수, 리스트)반복 가능한 두번째의 인자의 각 자료에 첫번째 인자의 함수 적용
# lambda(매개변수: 표현식)
# reduce(함수, 시퀸스) 시퀸스 원소에 누적 함수 적용
# filter(함수, 리스트) 리스트 각 원소 중 함수 적용하여 True인 것만 반환

# list_a = [0, 1, 2, 3, 4]
# list_a = list(map(lambda x: pow(x, 2), list_a))
# print(list_a)

# hex: 10 -> 16 , ord: 문자 -> 10 , chr: 10 -> 문자
# 0x는 접두사임 포맷함수에서는 생략
# val = 0xac00
# print("chr({0:x}) => '{1}'".format(val, chr(val)))

data_list = list(range(1, 21))
print("data_list: {0}".format(data_list))

map_str = input("항목 x에 대해 적용할 표현식을 입력하세요: ")
filter_str = input("항목 x에 대해 적용할 표현식을 입력하세요: ")

map_list = list(map(lambda x: eval(map_str), data_list))
filter_list = list(filter(lambda x: eval(filter_str), map_list))

print("data_list에 대한 map 함수의 적용 결과: {0}".format(map_list))
print("map_list에 대한 filter 함수의 적용 결과: {0}".format(filter_list))

# def list_a(*args):
#     return max(args)
#
# numbers = [3, 5, 4, 1, 8, 10, 2]
#
# print("max{0} => {1}".format(tuple(numbers), list_a(*numbers)))
#
# # max(3, 5, 4, 1, 8, 10, 2) => 10