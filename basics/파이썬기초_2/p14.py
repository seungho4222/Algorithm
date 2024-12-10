def main():
    input_str = input()
    digit = [int(dig.strip()) for dig in input_str.split(',')]
    odd = [str(i) for i in digit if i % 2 == 1]

    odd_str = ', '.join(odd)

    print(odd_str)

if __name__ == "__main__":
    main()