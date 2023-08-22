# 가로, 세로 길이
col, row = map(int, input().split())
# 자르는 횟수
cnt = int(input())
# 행,열 자르는 번호
r_cut = [0, row]
c_cut = [0, col]
for i in range(cnt):
    t, n = map(int, input().split())
    if t:
        c_cut += [n]
    else:
        r_cut += [n]
# 내림차순 정렬
r_cut.sort(reverse=True)
c_cut.sort(reverse=True)
# 자른 후 가장 긴 종이길이
max_r = 0
max_c = 0
for i in range(len(r_cut)-1):
    if r_cut[i] - r_cut[i+1] > max_r:
        max_r = r_cut[i] - r_cut[i+1]
for i in range(len(c_cut)-1):
    if c_cut[i] - c_cut[i+1] > max_c:
        max_c = c_cut[i] - c_cut[i+1]

print(max_r * max_c)


'''
10 8
3
0 3
1 4
0 2

'''