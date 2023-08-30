T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())  # A와 B에 속한 정수의 개수
    A = list(map(int, input().split())) 
    B = list(map(int, input().split()))
    ans1 = len(A + B)  # A와 B를 합친 리스트의 정수 개수
    ans2 = len(set(A+B))  # A와 B를 합치고 중복을 제거한 정수 개수
    print(f'#{tc} {ans1-ans2}')  # 중복개수 출력
