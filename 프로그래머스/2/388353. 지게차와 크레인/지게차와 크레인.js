function solution(storage, requests) {
    const n = storage.length + 2;
    const m = storage[0].length + 2;
    
    // 창고 0으로 둘러싸기
    storage = storage.map((row) => [0, ...row, 0]);
    storage.unshift(Array(m).fill(0));
    storage.push(Array(m).fill(0));
    
    const map = new Map(); // 알파벳 개수 저장
    let lifts = []; // 지게차용 외부 좌표 목록
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!storage[i][j]) lifts.push([i, j]);
            else map.set(storage[i][j], (map.get(storage[i][j]) ?? 0) + 1);
        }
    }
    
    // 출고 요청 처리
    requests.forEach((r) => {
        const [alp, isCrane] = [r[0], r.length === 2];
        
        // 알파벳이 있는 경우만 처리
        if (map.has(alp)) {
            // 크레인 사용
            if (isCrane) {
                storage.map((row, i) => row.map((col, j) => {
                    // 외부 연결 여부를 모르기 때문에 임시로 1 표시
                    if (col === alp) storage[i][j] = 1;
                }))
                // 알파벳 제거
                map.delete(alp);
            // 지게차 사용
            } else {
                const tmp = []; // 다음 지게차용 외부 좌표
                
                while (lifts.length) {
                    const [i, j] = lifts.pop();
                    let isBlank = true; // 4면이 모두 비어있는 경우
                    
                    // 4면 탐색
                    for (let [di, dj] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                        const [ni, nj] = [i + di, j + dj];
                        if (ni < 0 || ni >= n || nj < 0 || nj >= m || !storage[ni][nj]) continue;
                        // 지게차로 꺼내는 경우
                        if (storage[ni][nj] === alp) {
                            tmp.push([ni, nj]);
                            storage[ni][nj] = 0;
                            map.set(alp, map.get(alp) - 1);
                        // 크레인으로 꺼낸 공간인 경우
                        } else if (storage[ni][nj] === 1) {
                            lifts.push([ni, nj]);
                            storage[ni][nj] = 0;
                        // 꺼낼 수 없는 알파벳
                        } else isBlank = false;
                    }
                    
                    if (!isBlank) tmp.push([i, j]);
                }
                
                lifts = tmp;
            }
        }
    })
    
    return [...map.values()].reduce((acc, cur) => acc + cur);
}