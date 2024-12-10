def factorial(a):
    fac = 1
    for i in range(1, a + 1):
        fac *= i
    return fac

a = int(input())
print(factorial(a))