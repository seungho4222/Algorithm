str1 = 'ABC'
str2 = 'ZZZZZZZZZZABD'
# str1 = 'ABC'
# str2 = 'ZZZZAZBCZZZZZ'

for i in range(len(str2)-len(str1)+1):
    if str1 == str2[:len(str1)]:
        print('있다')
        break
    else:
        a = list(str2)
        first_str = a.pop(0)
        a.append(first_str)
        str2 = ''.join(a)

if str1 != str2[:len(str1)]:
    print('없다')