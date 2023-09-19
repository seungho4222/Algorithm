def solution(routes):
    answer = 1  # 차량 대수는 1대 이상이므로 1개 설치부터 시작
    cars = sorted(routes, key=lambda x: x[1])  # 고속도로 나간 지점 기준 정렬
    check = cars[0][1]  # 첫 카메라 위치
    for i in range(1, len(cars)):
        if cars[i][0] <= check:  # 현재 카메라로 단속 가능
            continue
        else:  # 추가 설치 필요
            check = cars[i][1]  # 카메라 변경하고
            answer += 1  # 카메라 수 추가

    return answer


print(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]))