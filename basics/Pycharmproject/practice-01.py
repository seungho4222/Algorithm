# def calc_sum(precision1, precision2, *params):
#     if precision1 == 0:
#         total1 = 0
#     elif 0 < precision1 < 1:
#         total1: 0.0
#
#     if precision2 == 0:
#         total2 = 0
#     elif 0 < precision2 < 1:
#         total2 = 0.0
#
#     for val in params:
#         total1 += val
#         total2 += val
#
#     return total1, total2
#
# ret_val = calc_sum(0, 0.1, 1, 2)
# print("calc_sum(0, 0.1, 1, 2) 함수가 반환한 값: {0}, {1}".format(*ret_val))
# print("calc_sum(0, 0.1, 1, 2) 함수가 반환한 값: {0}, {1}".format(ret_val[0], ret_val[1]))

# 원의 면적 및 넓이 계산

PI = 3.14

def input_radius():
    radius_str = input("반지름을 입력하세요: ")
    return float(radius_str)
def calc_circle_area(r):
    return PI * r * r

def calc_circumference(r):
    return 2 * PI * r

radius = input_radius()
circle_area = calc_circle_area(radius)
circumference = calc_circumference(radius)

print("원의 면적: {0:.2f}, 원의 둘레: {1:.2f}".format(circle_area, circumference))
