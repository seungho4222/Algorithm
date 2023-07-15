list_a = ["가위", "바위", "보"]

Man1 = input()
Man2 = input()

if Man1 == list_a[0]:
    if Man2 == list_a[0]:
        print("Result : Draw")
    elif Man2 == list_a[1]:
        print("Result : Man2 Win!")
    elif Man2 == list_a[2]:
        print("Result : Man1 Win!")

if Man1 == list_a[1]:
    if Man2 == list_a[0]:
        print("Result : Man1 Win!")
    elif Man2 == list_a[1]:
        print("Result : Draw")
    elif Man2 == list_a[2]:
        print("Result : Man2 Win!")

if Man1 == list_a[2]:
    if Man2 == list_a[0]:
        print("Result : Man2 Win!")
    elif Man2 == list_a[1]:
        print("Result : Man1 Win!")
    elif Man2 == list_a[2]:
        print("Result : Draw")
