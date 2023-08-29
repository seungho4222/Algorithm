# N자리 자연수 중 각 자릿수에 중복 사용된 숫자 없을 경우 당첨 => 당첨확률은?
# 각 자릿수 숫자선택시 다음 자리 숫자는 선택지 -1
T = int(input())
for tc in range(1, T+1):
    N = int(input())
    all_case = 10 ** N  # 모든 케이스
    win_case = 1
    for i in range(N):  # 각 자리수 중복 제거
        win_case *= 10 - i

    print(f'#{tc} {win_case/all_case:.5f}')