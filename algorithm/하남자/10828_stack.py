import sys

sys.stdin = open('input.txt', 'r')


arr = []
for i in range(int(input())):
    command = input().split()

    if command[0] == 'push':
        arr.append(int(command[1]))
    elif command[0] == 'pop':
        if arr:
            print(arr.pop())
        else:
            print(-1)
    elif command[0] == 'size':
        print(len(arr))
    elif command[0] == 'empty':
        if arr:
            print(0)
        else:
            print(1)
    elif command[0] == 'top':
        if arr:
            print(arr[-1])
        else:
            print(-1)