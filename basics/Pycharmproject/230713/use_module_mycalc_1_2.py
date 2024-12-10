# import module_mycalc_1, module_mycalc_2
#
# op1, op2 = 2, 3
#
# result = module_mycalc_1.plus(op1, op2)
# print(result)
#
# result = module_mycalc_1.minus(op1, op2)
# print(result)
#
# result = module_mycalc_2.multiply(op1, op2)
# print(result)
#
# result = module_mycalc_2.divide(op1, op2)
# print("{:.2}".format(result))

from package_mycalc import *

op1, op2 = 2, 3

result = module_mycalc_1.plus(op1, op2)
print(result)

result = module_mycalc_1.minus(op1, op2)
print(result)

result = module_mycalc_2.multiply(op1, op2)
print(result)

result = module_mycalc_2.divide(op1, op2)
print("{:.2}".format(result))
