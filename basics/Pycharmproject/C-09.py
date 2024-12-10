scores = [85, 65, 77, 83, 75, 22, 98, 88, 38, 100]
total = 0

while scores:
    score = scores.pop()
    if score >= 80:
        total += score

print(total)