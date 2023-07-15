# 리스트 내포 가능 이용해 피보나치 수열 10번째까지 출력
fibonacci = [1, 1]
fibo_ten = [fibonacci.append(fibonacci[i] + fibonacci[i + 1]) for i in range(8)]

print(fibonacci)