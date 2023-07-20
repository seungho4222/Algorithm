test_case = int(input())

for count in range(test_case):  # 케이스 반복 횟수
    case_count = input().split(" ")     # 케이스별 a, b의 숫자열 개수

    a = input().split(" ")  # 숫자열 공백구분으로 입력
    b = input().split(" ")  # 숫자열 공백구분으로 입력

    if len(a) > len(b):     # a의 숫자열이 긴 경우
        result = []     # 마주보는 수를 곱하고 그 값들을 모두 더한 값 리스트
        for i in range(len(a) - len(b) + 1):    # 숫자열 차이별 반복횟수
            case_zip = list(zip(a, b))
            
            zip_times = []
            for times in case_zip:
                zip_times.append(int(times[0]) * int(times[1]))     # 마주보는 수 곱한 값 리스트 추가

            result.append(sum(zip_times))       # 마주보는 수 곱한 값들을 더한 값 리스트 추가
            a.pop(0)    # 긴숫자열의 0번 인덱스를 삭제후 위 과정 반복
        print(f'#{count + 1} {max(result)}')    # 반복 결과 max값 도출

    else:       # # b의 숫자열이 긴 경우
        result = []
        for i in range(len(b) - len(a) + 1):
            case_zip = list(zip(a, b))
            
            zip_times = []
            for times in case_zip:
                zip_times.append(int(times[0]) * int(times[1]))

            result.append(sum(zip_times))
            b.pop(0)
        print(f'#{count + 1} {max(result)}')
    