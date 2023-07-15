# 가변형 인자로 정수들을 입력받아 곱을 반환하는 함수를 정의하고,
# 단, 1, 2, '4', 3와 같이 제대로 입력되지 않은 경우 예외를 처리하는 프로그램을 작성하십시오.

# 타입 확인 isinstance(100, int) True
# raise 에러타입(에러명)
# try 정상함수 진행 except 예외처리시 진행
def multiply(*args):
    result = 1
    for num in args:
        if isinstance(num, int):
            result *= num
        else:
            raise ValueError("에러발생")
    return result

try:
    numbers = [1, 2, '4', 3]
    # 예외가 발생할 수 있는 코드
    print(multiply(*numbers))
except ValueError as e:
    # 예외가 발생한 경우 실행되는 코드
    print(e)
finally:
    print("No Problem")
