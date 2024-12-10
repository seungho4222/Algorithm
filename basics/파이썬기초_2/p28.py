# 가로, 세로 정보을 갖고, 사각형의 면적을 계산하는 메서드를 갖는 Rectangle 클래스를 정의하고, 생성한 객체의 사각형의 면적을 출력하는 프로그램을 작성
class Rectangle:
    
    def __init__(self, width, length):
        self.__width = width
        self.__length = length

    @property
    def width(self):
        return self.__width
    
    @property
    def length(self):
        return self.__length
    
    def area(self):
        return self.width * self.length
    
rec = Rectangle(4, 5)

print(f'사각형의 면적: {rec.area()}')




# 사각형의 면적: 20