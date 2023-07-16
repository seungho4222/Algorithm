# 2차원 배열 구조를 만들기 위한 행, 열 정보를 콤마(,)로 구분해 입력, 이 리스트 객체의 항목의 값은 행과 열의 인덱스 곱으로 초기화해 출력

# rc = input().split(',')

# row = int(rc[0])
# col = int(rc[1])

# array = [[0]*col for i in range(row)]

# val = 0
# for i in range(5):
#     array[1][i] = val
#     val += 1

# val2 = 0
# for i in range(5):
#     array[2][i] = val2
#     val2 += 2

# print(array)

def create_2d_array(rows, cols):
    # 2차원 배열 생성 및 초기화
    array_2d = [[i*j for j in range(cols)] for i in range(rows)]
    return array_2d

def main():
    # 입력 받기
    input_str = input()
    rows, cols = map(int, input_str.split(','))

    # 2차원 배열 생성
    result = create_2d_array(rows, cols)

    # 출력
    print(result)

if __name__ == "__main__":
    main()
    