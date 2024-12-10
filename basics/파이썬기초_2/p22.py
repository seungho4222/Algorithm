input_data = input()

dict_count = { i: input_data.count(i) for i in input_data}

for i, j in dict_count.items():
    print(i, j, sep=(","))