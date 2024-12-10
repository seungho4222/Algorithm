# 국어, 영어, 수학 점수를 입력받아 합계를 구하는 객체지향 코드를 작성
# 이 때 학생 클래스의 객체는 객체 생성 시 국어, 영어, 수학 점수를 저장하며, 총점을 구하는 메서드를 제공합니다.

class Student:

    def __init__(self):
        scores = input().split(', ')
        kor = int(scores[0])
        eng = int(scores[1])
        math = int(scores[2])
        sum_score = kor + eng + math
        print(f'국어, 영어, 수학의 총점: {sum_score}')

# Student()


# 국적을 출력하는 printNationality 정적 메서드를 갖는 Korean 클래스를 정의하고 메서드를 호출하는 코드를 작성

class Korean:

    def printNationality():
        print("대한민국\n대한민국")
              

Korean.printNationality()   # 정적메서드로 인스턴스 필요 X