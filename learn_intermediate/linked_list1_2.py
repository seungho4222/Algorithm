'''여러 개의 수열을 정해진 규칙에 따라 합치려고 한다. 다음은 4개의 수열이 주어진 경우의 예이다.
수열 2의 첫 숫자 보다 큰 수자를 수열 1에서 찾아 그 앞에 수열 2를 끼워 넣는다.
합쳐진 수열에 대해, 수열 3의 첫 숫자보다 큰 숫자를 찾아 그 앞에 수열 3을 끼워 넣는다. 큰 숫자가 없는 경우 맨 뒤에 붙인다.
마지막 수열까지 합치고 나면, 맨 뒤의 숫자부터 역순으로 10개를 출력한다.

[입력]
첫 줄에 테스트케이스의 수 T가 주어진다. 1<=T<=50
다음 줄부터 테스트 케이스의 별로 첫 줄에 수열의 길이 N, 수열의 개수 M, 이후 M개의 줄에 걸쳐 1000이하의 자연수로 구성된 수열이 주어진다. 4<=N<=1000, 1<=M<=1000

[출력]
각 줄마다 "#T" (T는 테스트 케이스 번호)를 출력한 뒤, 완성된 수열의 맨 뒤부터 10개의 숫자를 역순으로 출력한다.
'''


import sys

sys.stdin = open('input.txt', 'r')

# 시간초과
# def insert_seq():
#     global seq
#     for i in range(M-1):
#         new_seq = list(map(int, input().split()))
        
#         end = len(seq)
#         save = []
#         while seq:
#             num = seq.pop(0)
#             if new_seq[0] < num:
#                 save.extend(new_seq)
#                 new_seq = [float('inf')]
#                 save.append(num)
#             else:
#                 save.append(num)
#         if len(save) == end:
#             save.extend(new_seq)
#         seq = save
#     return seq[::-1]

# 시간초과
# def insert_seq():
#     global seq
#     new_seq = list(map(int, input().split()))

#     end = len(seq)
#     for i in seq:
#         if new_seq[0] < i:
#             stack = seq.index(i)
#             for j in new_seq[::-1]:
#                 seq.insert(stack, j)
#             return seq
#     if len(seq) == end:
#         seq.extend(new_seq)
#     return seq

# 시간초과
# def insert_seq():
#     global seq
#     new_seq = list(map(int, input().split()))

#     if new_seq[0] > max(seq):
#         seq.extend(new_seq)
#         return

#     save = []
#     for i in seq:
#         if new_seq[0] < i:
#             save.extend(seq[:seq.index(i)])
#             save.extend(new_seq)
#             save.extend(seq[seq.index(i):])
#             seq = save
#             return

# 시간초과
# def insert_seq():
#     global seq
#     new_seq = list(map(int, input().split()))

#     if new_seq[0] > max(seq):
#         seq.extend(new_seq)
#         return

#     seq_clone = sorted(enumerate(seq),key=lambda x:x[1] ,reverse=True)
#     save = []

#     index = len(seq)
#     for i in seq_clone:
#         if new_seq[0] < i:
#             if seq.index(i) < index:
#                 index = seq.index(i)
#         else:
#             break

# 시간초과
# def insert_seq():
#     global seq
#     new_seq = list(map(int, input().split()))

#     if new_seq[0] >= max(seq):
#         seq.extend(new_seq)
#         return

#     seq_clone = [(0, new_seq[0])] + list(enumerate(seq))
#     sort_seq = list(sorted(seq_clone, key=lambda x:x[1], reverse=True))
#     a = sort_seq[:sort_seq.index((0, new_seq[0]))]
#     b = list(sorted(a))
#     index = b[0][0]

#     save = []
    
#     save.extend(seq[:index])
#     save.extend(new_seq)
#     save.extend(seq[index:])
#     seq = save
#     return


# T = int(input())
# for tc in range(1, T+1):
#     N, M = map(int, input().split())
#     seq = list(map(int, input().split()))

#     for i in range(M-1):
#         insert_seq()

#     print(f'#{tc}', end=' ')
#     print(*seq[-1:-11:-1])


T = int(input())
for tc in range(1,T+1):
    N, M = map(int, input().split())
    arr = [float('inf')]
    cnt = 0
    for _ in range(M):
        a = list(map(int, input().split()))
        for i in range(N*cnt+1):
            if a[0] < arr[i]:
                arr[i:i] = a
                break
        cnt +=  1
    print(f'#{tc}',end=' ')
    print(*arr[-11:-1][::-1])