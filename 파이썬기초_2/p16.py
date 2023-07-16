# 홀수만 출력
# test = [5, 6, 77, 45, 22, 12, 24]
# l = [i for i in test if i % 2 == 1]
# print(l)

# 홀수번째 인덱스만 출력
# test = [12, 24, 35, 70, 88, 120, 155]
# l = [i for i in test if test.index(i) % 2 == 1]
# print(l)

# 리스트 내포 : 항목값 0인 2*3*4 3차원 배열 만들기
l = [[[0 for i in range(4)] for j in range(3)] for k in range(2)]
print(l)