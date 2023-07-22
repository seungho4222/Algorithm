''' A도시는 전기버스를 운행하려고 한다. 전기버스는 한번 충전으로 이동할 수 있는 정류장 수가 정해져 있어서, 중간에 충전기가 설치된 정류장을 만들기로 했다.
버스는 0번에서 출발해 종점인 N번 정류장까지 이동하고, 한번 충전으로 최대한 이동할 수 있는 정류장 수 K가 정해져 있다.
충전기가 설치된 M개의 정류장 번호가 주어질 때, 최소한 몇 번의 충전을 해야 종점에 도착할 수 있는지 출력하는 프로그램을 만드시오.
만약 충전기 설치가 잘못되어 종점에 도착할 수 없는 경우는 0을 출력한다. 출발지에는 항상 충전기가 설치되어 있지만 충전횟수에는 포함하지 않는다.

[입력]
첫 줄에 노선 수 T가 주어진다.  ( 1 ≤ T ≤ 50 )
각 노선별로 K, N, M이 주어지고, 다음줄에 M개의 정류장 번호가 주어진다. ( 1 ≤ K, N, M ≤ 100 )

[출력]
#과 노선번호, 빈칸에 이어 최소 충전횟수 또는 0을 출력한다.
'''

# 1
T = int(input())
for test_case in range(1, T + 1):       # K = 이동 가능 정류장 수, N = 정류장 수, M = 충전기 설치된 정류장 수
    K, N, M = map(int, input().split(" "))
    charge_busstop_num = set(map(int, input().split(" ")))      # set 함수로 충전소 중복 제거
    charge_count = 0        # 충전 횟수
    drive_count = K         # 이동가능 수
    for busstop in range(1, N + 1):     # 현재 정류장번호(1번 정류장 도착 시 부터 순회)
        drive_count -= 1                # 정류장 도착할때마다 이동가능 수 -1
        if drive_count + busstop >= N:              # 이동가능 수와 현재 정류장번호의 합이 종점보다 같거나 클 경우
            print(f'#{test_case} {charge_count}')
            break
        if busstop in charge_busstop_num:           # 현재 정류장에 충전소가 있는 경우
            if drive_count == 0:                                    # 추가 이동 불가능한 경우
                charge_count += 1                                       # 현재 정류장에서 충전
                drive_count = K                                         # 이동가능 수 초기화
            else:
                a = range(busstop + 1, busstop + drive_count + 1)   # 추가 이동 가능한경우의 갈 수 있는 정류장 번호 목록
                if list(set(charge_busstop_num) & set(a)) == []:    # 갈 수 있는 정류장에 충전소가 없는 경우
                    charge_count += 1                                   # 현재 정류장에서 충전
                    drive_count = K                                     # 이동가능 수 초기화
        if (drive_count == 0) and (busstop not in charge_busstop_num):      # 이동가능 수가 0이면서 현재 정류장에 충전소가 없는 경우
            print(f'#{test_case} 0')
            break

# 2
T = int(input())
for test_case in range(1, T + 1):
    K, N, M = map(int, input().split(" "))      # K = 이동 가능 정류장 수, N = 정류장 수, M = 충전기 설치된 정류장 수
    charge_busstop_num = set(map(int, input().split(" ")))  # set으로 변경하여 중복을 제거
    current_location = 0  # 현재 버스 위치
    charge_count = 0  # 충전 횟수

    while current_location + K < N:  # 종점에 도착할 수 있을 때까지 반복
        next_location = current_location + K

        # 다음 정류장부터 종점까지 중에서 충전기 설치 정류장까지 갈 수 있는 거리를 탐색
        while next_location > current_location and next_location not in charge_busstop_num:
            next_location -= 1

        if next_location == current_location:  # 충전기를 찾지 못한 경우
            charge_count = 0
            break

        charge_count += 1
        current_location = next_location

    print(f'#{test_case} {charge_count}')