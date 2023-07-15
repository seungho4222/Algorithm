a = input()

if a.isalpha():
    if a.isupper():
        print(a + "(ASCII: %d)" % ord(a), "=>", a.lower() + "(ASCII: %d)" % ord(a.lower()))
    else:
        print(a + "(ASCII: %d)" % ord(a), "=>", a.upper() + "(ASCII: %d)" % ord(a.upper()))

else:
    print(a)
