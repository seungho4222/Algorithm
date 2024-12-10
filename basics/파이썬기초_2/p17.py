# 딕셔너리 객체를 이용한 전화번호 프로그램 작성

tel_dict = {"홍길동" : "010-1111-1111", "이순신" : "010-1111-2222", "강감찬" : "010-1111-3333"}

def tel_serch():
    print("아래 학생들의 전화번호를 조회할 수 있습니다.")
    for key in dict.keys(tel_dict):
        print(key)
    print("전화번호를 조회하고자 하는 학생의 이름을 입력하십시오.")
    input_data = input()
    print(f"{input_data}의 전화번호는 {tel_dict[input_data]}입니다.")

tel_serch()