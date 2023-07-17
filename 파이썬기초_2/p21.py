# 사용자가 입력한 문장에서 숫자와 문자를 구별해 각각의 개수를 출력하는 프로그램을 작성
# hello world! 123

"""
data = input()

alpha = list(filter(str.isalpha, data)) # 문자열에서 한개씩 빼와서 해당 문자가 알파벳인지 확인 후 필터링
digit = list(filter(str.isdigit, data)) # 문자열에서 한개씩 빼와서 해당 문자가 숫자인지 확인 후 필터링

print(f"LETTERS {len(alpha)}")
print(f"DIGITS {len(digit)}")
"""


# 사용자가 입력한 문장에서 대소문를 구별해 각각의 갯수를 출력하는 프로그램을 작성
# Hello World! 123

data = input()

alpha = list(filter(str.isalpha, data)) # 문자열에서 한개씩 빼와서 해당 문자가 알파벳인지 확인 후 필터링

upper = list(filter(str.isupper, data)) # 문자열에서 한개씩 빼와서 해당 문자가 대문자인지 확인 후 필터링
lower = list(filter(str.islower, data)) # 문자열에서 한개씩 빼와서 해당 문자가 소문자인지 확인 후 필터링

print(f"UPPER CASE {len(upper)}")
print(f"LOWER CASE {len(lower)}")