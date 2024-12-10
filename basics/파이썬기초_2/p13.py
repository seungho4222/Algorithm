# 단어를 콤마(,)로 구분해 입력하면 그 단어들을 사전순으로 정렬해 출력

input_str = input()
dic = sorted(input_str.split(', '))

result = ', '.join(dic)
print(result)

# def main():
#     # 입력 받기
#     input_str = input("input: ")
#     words = [word.strip() for word in input_str.split(',')]

#     # 단어들을 사전순으로 정렬
#     sorted_words = sorted(words)

#     # 출력
#     print("output:", ", ".join(sorted_words))

# if __name__ == "__main__":
#     main()