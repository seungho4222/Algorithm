def pbnc(a):
    pb = [1, 1]
    for i in range(8):
        k = pb[i] + pb[i+1]
        pb.append(k)
    return pb

a = int(input())
result = pbnc(a)
print(result)