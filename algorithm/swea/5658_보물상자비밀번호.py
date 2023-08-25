import sys
sys.stdin = open('input.txt', 'r')

# 숫자개수 // 4 만큼 뚜껑 회전
# 중복 제거한 16진수조합 중 K번째 숫자 10진수로 출력

T = int(input())
for tc in range(1, T+1):
    # N: 숫자 개수, K: 크기 순서
    N, K = map(int, input().split())
    # 16진수 숫자 N개 입력
    arr = list(input())
    # 숫자 생성
    nums = []
    for _ in range(N//4):
        # i+1번부터 문자길이만큼 숫자 잘라서 저장
        for i in range(0, N, N//4):
            num = ''.join(arr[i:i+N//4])
            if num not in nums:
                nums.append(num)
        # 뚜껑 회전
        arr.append(arr.pop(0))
    # 내림차순 정렬 후 K번째 숫자 찾기
    result = sorted(nums, reverse=True)[K-1]
    # 10진수로 출력
    print(f'#{tc}', int(result, 16))
