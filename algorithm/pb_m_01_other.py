T = int(input())
 
for test_case in range(1, T + 1):
    n,m=map(int,input().split())
    if(n>m):
        big=n
        small=m
        a = list(map(int, input().split()))
        b = list(map(int, input().split()))
    else:
        big=m
        small=n
        b = list(map(int, input().split()))
        a = list(map(int, input().split()))
    result=-float('inf')    # 음의 무한대
    for i in range(big-small+1):
        max = 0
        for j in range(small):
            max+=b[j]*a[j+i]
        if max>result:
            result=max
    print('#{0} {1}'.format(test_case,result))