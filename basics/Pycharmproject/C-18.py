# arr = [2, 4, 6, 8, 10]
#
# def random(a):
#     if a in arr:
#         return "{0} => True".format(a)
#     else:
#         return "{0} => False".format(a)
#
# print(arr)
# print(random(5))
# print(random(10))

def find_number(numbers, target):
    start = 0
    end = len(numbers) - 1

    while start <= end:
        mid = (start + end) // 2
        if numbers[mid] == target:
            return True
        elif numbers[mid] < target:
            start = mid + 1
        else:
            end = mid - 1

    return False


# 정렬된 숫자 리스트
numbers = [2, 4, 6, 8, 10]

# 임의의 숫자의 포함 여부 출력
print(numbers)
print("5 =>", find_number(numbers, 5))
print("10 =>", find_number(numbers, 10))