# 콤마(,)로 구분된 정수 값을 입력받아 리스트와 튜플 객체 생성 코드 작성

# input = 12, 34, 56, 78

# output = [12, 34, 56, 78]\n(12, 34, 56, 78)

a = input()

b = a.split(', ') # ', '로 항목 구분

c = [int(i) for i in (b)] # 정수형 변환

# for i in b:
#     digit = int(i)
#     c.append(digit)

print(c)
print(tuple(c))