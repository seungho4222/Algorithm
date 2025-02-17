function solution(n, q, ans) {
    var answer = 0; // 비밀 코드로 가능한 정수 조합 개수
    
    // 재귀 함수
    const combination = (selected) => {
        // 마지막으로 선택한 숫자
        const lastNumber = selected.at(-1) || 0;
        
        // 5개 선택 시, 비밀 코드 여부 체크
        if (selected.length === 5) {
            for (let i = 0; i < q.length; i++) {
                const tried = q[i]; // 입력한 정수
                let cnt = 0; // 비밀 코드에 포함된 정수 개수
                
                for (let j = 0; j < 5; j++) {
                    if (selected.includes(tried[j])) cnt++;
                }
                
                // 정수 개수가 응답값과 다르면 비밀 코드 X
                if (cnt !== ans[i]) return;
            }
            
            // 반복문 통과 시, 비밀 코드 O
            answer++;
            return;
        }
        
        // 오름차순으로 숫자 선택 후 재귀
        for (let num = lastNumber + 1; num <= n; num++) {
            combination([...selected, num]);
        }
    }
    
    combination([]);
    
    return answer;
}