# 리스트의 원소를 키로 하고, 원소의 length를 값으로 갖는 딕셔너리 생성
# 리스트 내포기능 사용하여 공백 제거

"""
fruit = ['   apple    ','banana','  melon']

result = {word.strip(): len(word.strip()) for word in fruit}

print(result)
"""


# 입력받은 정수의 1 ~ N 까지의 정수 제곱값 딕셔너리
"""
square = {(n + 1): ((n + 1) ** 2)  for n in range(int(input()))}

print(square)
"""


# 딕셔너리 가격 5% 인상

beer = {'하이트': 2000, '카스': 2100, '칭따오': 2500, '하이네켄': 4000, '버드와이저': 500}

price_increase = {key: (value * 1.05) for key, value in beer.items()}

print(beer) #인상 전
print(price_increase) # 인상 후