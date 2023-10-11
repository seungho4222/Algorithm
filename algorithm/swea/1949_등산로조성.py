dxy = [[0,1],[1,0],[0,-1],[-1,0]]


def bfs(row, col, visited, can_constr):  # 행, 열, 방문기록, 공사여부
    global max_v
    for dr, dc in dxy:
        nr, nc = row + dr, col + dc
        if 0 <= nr < N and 0 <= nc < N and arr[row][col] > arr[nr][nc] or can_constr == 0:
            break
    else:  # 공사했고, 4방향 탐색 다 했는데 추가 조성 못하면 출력값 비교 후 리턴
        max_v = max(max_v, len(visited))
        return

    for dr, dc in dxy:  # 델타 탐색
        nr, nc = row + dr, col + dc
        if 0 <= nr < N and 0 <= nc < N and [nr, nc] not in visited:  # 방문한적 없다면
            new_visited = visited + [[nr, nc]]  # 새 방문기록 만들기
            if arr[row][col] <= arr[nr][nc]:  # 공사 해봐야겠다
                if can_constr == 0:  # 공사 가능
                    for k in range(1, K+1):
                        arr[nr][nc] -= k  # 공사하기
                        if arr[row][col] > arr[nr][nc]:  # 등산로 조성됐다
                            bfs(nr, nc, new_visited, 1)  # 추가 탐색
                        else:  # 공사했는데 못가네
                            max_v = max(max_v, len(visited))  # 이동 불가하므로 출력값 비교
                        arr[nr][nc] += k  # 원상복구
                else:  # 공사 못하면 빠꾸
                    continue
            else:  # 공사 할 필요없음 => 다음 탐색
                bfs(nr, nc, new_visited, can_constr)


T = int(input())
for tc in range(1, T+1):
    N, K = map(int, input().split())  # N: 지도 길이, K: 최대 공사 가능 깊이
    max_bong = 0  # 맥스봉 값
    max_rc = []  # 맥스봉 좌표
    arr = []  # 지도

    for i in range(N):
        tmp = list(map(int, input().split()))
        arr.append(tmp)
        for j in range(N):
            if max_bong < tmp[j]:  # 맥스봉 더 크다 !!
                max_bong = tmp[j]
                max_rc = []  # 초기화 후, 좌표 저장
                max_rc.append([i,j])
            elif max_bong == tmp[j]:  # 맥스봉과 같다 !!
                max_rc.append([i,j])
    
    max_v = 0  # 최대 등산로 길이
    for sr, sc in max_rc:  # 맥스봉 탐색
        bfs(sr, sc, [[sr, sc]], 0)

    print(f'#{tc} {max_v}')
