test_case = int(input())    # 테스트 케이스 개수

for count in range(test_case):  # 케이스 수만큼 반복
    case_count = input().split(" ")     # 케이스별 a, b의 숫자열 개수

    a = input().split(" ")  # 숫자열 공백구분으로 입력
    b = input().split(" ")  # 숫자열 공백구분으로 입력

    result = []     # 마주보는 수를 곱하고 그 값들을 모두 더한 값 리스트

    for i in range(abs(len(a) - len(b)) + 1):    # 숫자열 차이별 반복횟수
        case_zip = list(zip(a, b))      # 마주보는 수 묶음
        zip_times = []      # 마주보는 수 곱한 값 리스트

        for times in case_zip:
            zip_times.append(int(times[0]) * int(times[1]))     # 마주보는 수 곱한 값 리스트 추가
    
        result.append(sum(zip_times))       # 마주보는 수 곱한 값들을 더한 값 리스트 추가
        
        if len(a) > len(b):     # a 숫자열이 긴 경우
            a.pop(0)    # a 숫자열의 0번 인덱스 삭제

        else:       # b의 숫자열이 긴 경우
            b.pop(0)    # b 숫자열의 0번 인덱스 삭제

    print(f'#{count + 1} {max(result)}')
