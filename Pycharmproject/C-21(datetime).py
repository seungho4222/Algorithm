# 다음의 결과와 같이 이름과 나이를 입력 받아 올해를 기준으로 100세가 되는 해를 표시하는 코드를 작성하십시오.

# name = input()
# age = int(input())
#
# this_year = 2019
#
# for i in range(age + 1, 101):
#     this_year += 1
#
# print("{0}(은)는 {1}년에 100세가 될 것입니다.".format(name, this_year))

import datetime

name = input()
age = int(input())

current_year = datetime.date.today().year
future_year = current_year + (100 - age)

print("{0}(은)는 {1}년에 100세가 될 것입니다.".format(name, future_year))