# a = input()
# sibal = ""
#
# for i in a:
#     sibal = i + sibal
#
# print(sibal)
# if a == sibal:
#     print("입력하신 단어는 회문(Palindrome)입니다.")
# else:
#     print("입력하신 단어는 회문(Palindrome)이 아닙니다.")

word = input()
def reverse_word(word):
    reversed_word = ""
    for char in word:
        reversed_word = char + reversed_word
    return reversed_word

def check_palindrome(word):
    reversed_word = reverse_word(word)
    if word == reversed_word:
        return True
    else:
        return False

a = reverse_word(word)
print(a)
if check_palindrome(word):
    print("입력하신 단어는 회문(Palindrome)입니다.")
else:
    print("입력하신 단어는 회문(Palindrome)이 아닙니다.")