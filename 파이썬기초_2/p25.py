class Student:

    def __init__(self):
        scores = input().split(', ')
        kor = int(scores[0])
        eng = int(scores[1])
        math = int(scores[2])
        sum_score = kor + eng + math
        print(f'국어, 영어, 수학의 총점: {sum_score}')

Student()
