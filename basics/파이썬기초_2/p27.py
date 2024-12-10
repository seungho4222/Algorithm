# 반지름 정보를 갖고, 원의 면적을 계산하는 메서드를 갖는 Circle 클래스를 정의하고, 생성한 객체의 원의 면적을 출력하는 프로그램을 작성
class Circle:

    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14 * self.r ** 2
    

test_1 = Circle(2)

print(f'원의 면적: {test_1.area()}')