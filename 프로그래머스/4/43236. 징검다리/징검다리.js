function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    const len = rocks.length;
    
    // 이분탐색 좌우 범위 지정
    let l = Math.min(rocks[0], distance - rocks[len - n - 1]);
    for (let i = 1; i < len - n; i++) l = Math.min(l, rocks[i] - rocks[i - 1]);
    let r = ~~(distance / (len - n + 1));
    
    // 이분탐색
    while (l <= r) {
        const m = ~~((l + r) / 2); // 바위 사이 거리의 최솟값 기준
        let rockCnt = len - n; // 사용해야 하는 바위 개수
        let isCan = false; // 바위 사이 간격의 최솟값 충족 여부
        
        let prev = 0;
        for (let i = 0; i < len; i++) {
            // 현재 바위 사용 가능 시, 잔여 바위 수 줄이고 이전 바위 위치 갱신
            if (rocks[i] - prev >= m) {
                rockCnt--;
                // 바위 모두 사용 시, 마지막 바위와 목적지의 거리 비교 후 조건 여부 결정
                if (!rockCnt) {
                    if (distance - rocks[i] >= m) isCan = true;
                    break;
                }
                prev = rocks[i];
            }
        }
        
        isCan ? l = m + 1 : r = m - 1;
    }
    
    return r;
}