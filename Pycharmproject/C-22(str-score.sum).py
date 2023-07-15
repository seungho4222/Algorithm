# "ADCBBBBCABBCBDACBDCAACDDDCAABABDBCBCBDBDBDDABBAAAAAAADADBDBCBDABADCADC"와 같은 문자열이 주어지고,
# A는 4점, B는 3점, C는 2점, D는 1점이라고 할 때 문자열에 사용된 알파벳 점수의 총합을 map 함수와 람다식을 이용해 구하십시오.

string = "ADCBBBBCABBCBDACBDCAACDDDCAABABDBCBCBDBDBDDABBAAAAAAADADBDBCBDABADCADC"
score_map = {'A': 4, 'B': 3, 'C': 2, 'D': 1}

total_score = sum(map(lambda x: score_map[x], string))

print(total_score)

# bir = ["lee, 2000", "kim, 2000", "choi, 2001", "park, 2001"]
#
# names = list(map(lambda x: x.split(',')[0], bir))
# birth = list(map(lambda x: x.split(',')[1], bir))
#
# print(names)
# print(birth)