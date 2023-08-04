def solution(progresses, speeds):
    answer = []
        # 개발 다 완료할 때까지
    while progresses:
        count = 0
        # 개발진행
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
       
        # 첫 번째 기능이 완료되면 해당 기능과 함께 배포 가능한 기능들을 세어서 count에 저장
        while progresses and progresses[0] >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1

        # 기능 완료로 한번에 배포된 카운트 저장
        if count != 0:
            answer += [count]

    return answer

print(solution([95,90,99,99,80,99], [1,1,1,1,1,1]))