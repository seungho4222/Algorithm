def solution(answers):
    answer = []
    # 문제 수
    ans_idx = list(enumerate(answers))
    # 찍는 방식
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    # 맞힌 점수
    point = [0, 0, 0] 
    # 길이만큼 나누어 찍는 방식 반복
    for i in ans_idx:
        if p1[i[0]%len(p1)] == i[1]:
            point[0] += 1
        if p2[i[0]%len(p2)] == i[1]:
            point[1] += 1
        if p3[i[0]%len(p3)] == i[1]:
            point[2] += 1
    
    max_point = max(point)

    for j in range(3):
        if point[j] == max_point:
            answer.append(j+1)

    return answer