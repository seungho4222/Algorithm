# list_a = list("abcdef")
# list_b = list(range(0, 6))
#
# for i, j in zip(list_a, list_b) :
#     print(i, j, sep=": ")

# dict.items() 딕셔너리의 키 밸류값 순회

string = 'abcdef'
dictionary = {char: index for index, char in enumerate(string)}

for key, value in dictionary.items():
    print(f"{key}: {value}")

print('_'.join(string))

