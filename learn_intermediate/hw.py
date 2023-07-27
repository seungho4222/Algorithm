try:
    num = int(input('숫자를 입력하세요: '))
    if num > 0:
        print('양수입니다.')
    elif num == 0:
        print('0입니다.')
    elif num < 0:
        print('음수입니다.')

except ValueError:
    print('잘못된 입력입니다.')


class Userinfo:
    def __init__(self):
        self.user_data = {}
    
    def get_user_info(self):
        try:
            self.user_data['이름'] = input('이름을 입력하세요: ')
            self.user_data['나이'] = int(input('나이를 입력하세요: '))
        except ValueError:
            print('나이는 숫자로 입력해야 합니다.')


    def display_user_info(self):    
        if len(self.user_data) == 2:
            print('사용자 정보:\n이름: {0}\n나이: {1}'.format(self.user_data['이름'], self.user_data['나이']))
        else:
            print('사용자 정보가 입력되지 않았습니다.')

user = Userinfo()
user.get_user_info()
user.display_user_info()