a = int(input())
b = 0

for i in range(1, a+1):
    if a % i == 0:
        print("%d(은)는 %d의 약수입니다." % (i, a))

for i in range(2, a):
    if a % i == 0:
        b = 1

if b == 0:
    print("%d(은)는 %d과 %d로만 나눌 수 있는 소수입니다." % (a, 1, a))
