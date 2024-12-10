# _*_ coding: utf - 8 _*_

# C-06.py

list_a = []

for i in range(1, 101):
    if i % 2 == 0:
        continue
    list_a.append(i)

print(*list_a, sep=", ")
