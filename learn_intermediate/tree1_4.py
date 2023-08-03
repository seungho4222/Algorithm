import sys

sys.stdin = open('input.txt', 'r')


T = int(input())
for tc in range(1, T+1):
    N, M, L = map(int, input().split())
    leaf_num = [list(map(int, input().split())) for _ in range(M)]
    # 인덱스를 노드번호로 하는 배열 생성
    node = [0] * (N+1)
    # 리프 노드번호 입력
    for i in leaf_num:
        node[i[0]] = i[1]
    # 노드번호 역순으로 계산
    for j in range(N-M,0,-1):
        # 자식노드의 좌우 노드번호
        left = j * 2
        right = j * 2 + 1
        # 좌우 노드 모두 존재시
        if right in range(1, N+1):
            node[j] = node[j*2] + node[j*2+1]
        # 좌측 노드만 존재시
        else:
            node[j] = node[j*2]

    print(f'#{tc}', node[L])
