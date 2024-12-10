# 리스트 내포 기능: 입력된 정수 값 5개의 평균을 출력하는 프로그램을 작성하십시오.

list_int = []

for i in range(5):
    list_int += [int(input())]

print("입력된 값 {0}의 평균은 {1}입니다.".format(list_int, sum(list_int) / len(list_int)))
