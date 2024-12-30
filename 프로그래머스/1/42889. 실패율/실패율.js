function solution(N, stages) {
    stages.sort((a, b) => a - b);
    const len = stages.length; // 총 도전자 수
    const answer = []; // [stage 번호, 실패율] 저장
    let idx = 0; // stages 순회 인덱스
    
    for (let stage = 1; stage <= N; stage++) {
        // 현재 난이도 도전자 수
        const challengers = len - idx;
        // 멈춰있는 사용자 수
        let cnt = 0;
        
        while (stage === stages[idx]) {
            cnt++;
            idx++;
        }
        
        answer.push([stage, cnt / challengers]);
    }
    
    // 실패율 내림차순, 번호 오름차순 정렬 후 번호만 반환
    return answer.sort((a, b) => b[1] - a[1] || a[0] - b[0]).map((v) => v[0]);
}