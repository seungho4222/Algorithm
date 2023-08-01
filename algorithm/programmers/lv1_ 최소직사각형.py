# my
def solution(sizes):
    w = 0
    h = 0
    max_size = 0

    for i in sizes:
        if max_size < max(i[0], i[1]):
            max_size = max(i[0], i[1])
            w = i[0]
            h = i[1]
    
    if max_size == w:
        for j in sizes:
            if h < min(j[0], j[1]):
                h = min(j[0], j[1])

    if max_size == h:
        for j in sizes:
            if w < min(j[0], j[1]):
                w = min(j[0], j[1])

    return w * h

sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]

print(solution(sizes))

# other
def solution(sizes):
    return max(max(x) for x in sizes) * max(min(x) for x in sizes)

#other
def solution(sizes):
    w = 0
    h = 0

    for x, y in sizes:
        if x < y:
            x, y = y, x

        if x > w:
            w = x
        if y > h:
            h = y

    return w * h

sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
print(solution(sizes))