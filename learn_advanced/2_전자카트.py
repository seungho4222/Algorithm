import sys

sys.stdin = open('input.txt', 'r')

# 사무실 출발 - 각 관리구역 1회씩 방문 - 사무실 도착
def golf_road(x):
    global min_v
    global battery
    global visited
    visited += [i]
    for i in range(N):
        battery += road[x][i]
        golf_road(i)



T = int(input())
for tc in range(1, T+1):
    N = int(input())
    road = [list(map(int, input().split())) for _ in range(N)]
    min_battery = 0
    battery = 0
    visited = []