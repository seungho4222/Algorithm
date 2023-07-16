game = {"가위": 1, "바위": 2, "보": 3}

input_str = input()

input_int = [int(i) for i in input_str.split(' ')]

A = input_int[0]
B = input_int[1]

if A == game["가위"]:
    if B == game["가위"]:
        print("Draw")
    elif B == game["바위"]:
        print("B")
    elif B == game["보"]:
        print("A")

if A == game["바위"]:
    if B == game["가위"]:
        print("A")
    elif B == game["바위"]:
        print("Draw")
    elif B == game["보"]:
        print("B")

if A == game["보"]:
    if B == game["가위"]:
        print("B")
    elif B == game["바위"]:
        print("A")
    elif B == game["보"]:
        print("Draw")




