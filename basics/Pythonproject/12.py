numbers = []

for i in range(100, 301):
    j = i // 100
    k = i // 10
    if (j % 2 == 0) and (k % 2 == 0) and (i % 2 == 0):
    	numbers.append(i)
        
print(*numbers, sep = ',')
