# 홀수만 출력
# test = [5, 6, 77, 45, 22, 12, 24]
# l = [i for i in test if i % 2 == 1]
# print(l)


# 홀수번째 인덱스만 출력
# test = [12, 24, 35, 70, 88, 120, 155]
# l = [i for i in test if test.index(i) % 2 == 1]
# print(l)


# 리스트 내포 : 항목값 0인 2*3*4 3차원 배열 만들기
# l = [[[0 for i in range(4)] for j in range(3)] for k in range(2)]
# print(l)


# 첫번째, 다섯번째, 여섯번째 항목을 제거한 후 리스트 출력
# test = [12, 24, 35, 70, 88, 120, 155]
# l = [i for i in test if test.index(i) != 0 and test.index(i) != 4 and test.index(i) != 5]
# print(l)


# 양쪽 리스트 중복값 리스트로 반환
# list_1 = [1,3,6,78,35,55]
# list_2 = [12,24,35,24,88,120,155]
# list_dup = [ i for i in list_1 for j in list_2 if i == j ]
# print(list_dup)


# 리스트 항목 중 중복 제거하는 함수 정의
def list_set(l):
    return sorted(list(set(l)))

test = [12,24,35,24,88,120,155,88,120,155]

print(list_set(test))