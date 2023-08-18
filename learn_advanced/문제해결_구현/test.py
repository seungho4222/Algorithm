# n = 0x00111111

# if n & 0x11:
#     print('little endian')
# else:
#     print('big endian')

def Bitprint(i):
    for j in range(7,-1,-1):
        print('1' if (i&(1<<j)) else '0', end='')
        # print('%d' % ((i>>j)&1), end='')

for i in range(-5,6):
    print('%2d = ' % i, end='')
    Bitprint(i)
    print()