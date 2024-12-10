num = input()
count = [0] * 10

for digit in num:
    count[int(digit)] += 1

output = " ".join(str(i) for i in range(10))
print(output)
output = " ".join(str(c) for c in count)
print(output)

# num = int(input("어떤 양의 정수를 입력하세요: "))
# digits = [0] * 10
#
# while num > 0:
#     digit = num % 10
#     digits[digit] += 1
#     num //= 10
#
# for i in range(10):
#     print(f"{i}의 개수: {digits[i]}")