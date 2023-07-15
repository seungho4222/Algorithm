# i = 5
#
# while i >= 1:
#     print("*" * i)
#     i -= 1

i, k = 0, 7

while i <= 3:
    print("{0}{1}".format(" " * i, "*" * k))
    k -= 2
    i += 1
