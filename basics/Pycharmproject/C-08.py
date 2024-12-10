# _*_ coding: utf - 8 _*_

# C-08.py

# blood_type = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
# Blood_A, Blood_O, Blood_B, Blood_AB = 0, 0, 0, 0
#
# for i in blood_type:
#     if i == 'A':
#         Blood_A += 1
#     elif i == 'O':
#         Blood_O += 1
#     elif i == 'B':
#         Blood_B += 1
#     elif i == 'AB':
#         Blood_AB += 1
#
# dic = {'A': Blood_A, 'O': Blood_O, 'B': Blood_B, 'AB': Blood_AB}
#
# print(dic)

data = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
counts = {}

for blood_type in data:
    if blood_type in counts:
        counts[blood_type] += 1
    else:
        counts[blood_type] = 1

print(counts)