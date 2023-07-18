# 대문자 변환 출력 / 엔터 입력시 종료
"""
while True:
    str_input = input() 
    if not str_input:
        break
    print(f'>> {str_input.upper()}')
-----------------or---------------------
for i in range(3):
    str_input = input() # Hello World
    print(f'>> {str_input.upper()}') # >> HELLO WORLD
"""


# 콤마 구분 후 사전순 정렬
"""
str_test = input() # 산 하늘 강 바다 하늘 강 들
print(','.join(sorted(set(str_test.split(' '))))) # 강,들,바다,산,하늘
"""


# 입력 문자열의 짝수 인덱스만 출력
"""
# str_test = input() # H1e2l3l4o5w6o7r8l9d
# str_list = [i for i in str_test]
# for j in str_list:
#     if str_list.index(j) % 2 == 0:
#         print(j, end='') # 쉽게 생각하자
"""

word = input() # H1e2l3l4o5w6o7r8l9d
print(word[::2]) # Helloworld