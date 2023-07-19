# name 프로퍼티를 가진 Student를 부모 클래스로 major 프로퍼티를 가진 GraduateStudent를 자식 클래스를 정의하고 이 클래스의 객체를 다음과 같이 문자열로 출력하는 코드를 작성

class Student:
    
    def __init__(self):
        self.__name = "홍길동"
    
    @property
    def name(self):
        return self.__name


class GraduateStudent:

    pass
        
a = Student()


print(f'이름: {a.name}')

# 이름: 홍길동
# 이름: 이순신, 전공: 컴퓨터