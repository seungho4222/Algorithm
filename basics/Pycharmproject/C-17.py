arr = [1, 2, 3, 4, 3, 2, 1]

# print(arr)
# print(list(set(arr)))

set = []
for i in arr:
    if i not in set:
        set.append(i)

print(arr)
print(set)