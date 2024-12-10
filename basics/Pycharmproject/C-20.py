# 숫자에 대해 제곱을 구하는 함수를 정의히고, 다음과 같이 숫자를 콤마(,)로 구분해 입력하면
# 정의한 함수를 이용해 제곱 값을 출력하는 프로그램을 작성하십시오.

# def square(x):
#     return x ** 2
#
# a, b = input().split(', ')
# a = int(a)
# b = int(b)
#
# print("square({0}) =>".format(a), square(a))
# print("square({0}) =>".format(b), square(b))


# 인자로 전달된 두 개의 문자열 중 길이가 더 긴 문자열을 출력하는 함수를 정의하고 결과를 출력하는 프로그램을 작성하십시오.

# def len_vs(i, j):
#     if len(i) > len(j):
#         return i
#     else:
#         return j
#
# a, b = input().split(', ')
#
# print(len_vs(a, b))


# 인자로 전달된 숫자를 이용해 카운트다운하는 함수 countdown을 정의하고, 이 함수를 이용하여 countdown(0), countdown(10)을 순서대로 실행하십시오.
# 0 보다 작거나 같은 인자가 전달되었을 경우 "카운트다운을 하려면 0보다 큰 입력이 필요합니다." 를 출력하십시오.

def countdown(i):
    if i <= 0:
        return "카운트다운을 하려면 0보다 큰 입력이 필요합니다."
    else:
        for j in range(i, 0, -1):
            print(j)

print(countdown(0))
countdown(10)