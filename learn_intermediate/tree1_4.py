import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M, L = map(int, input().split())
    leaf_num = [list(map(int, input().split())) for _ in range(M)]
    print(leaf_num)