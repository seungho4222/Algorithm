# name 프로퍼티를 가진 Student를 부모 클래스로 major 프로퍼티를 가진 GraduateStudent를 자식 클래스를 정의하고 이 클래스의 객체를 다음과 같이 문자열로 출력하는 코드를 작성

class Student:
    
    def __init__(self, name):
        self.__name = name  # private 설정
    
    @property
    def name(self):
        return self.__name
    
    def output(self):
        return f'이름: {self.name}'


class GraduateStudent(Student):
    
    def __init__(self, name, major):
        super().__init__(name)
        self.__major = major

    @property
    def major(self):
        return self.__major
    
    def output(self):
        return super().output() + f', 전공: {self.major}'
    
Student1 = Student('홍길동')
Student2 = GraduateStudent('이순신', '컴퓨터')
print(Student1.output())
print(Student2.output())


# 이름: 홍길동
# 이름: 이순신, 전공: 컴퓨터