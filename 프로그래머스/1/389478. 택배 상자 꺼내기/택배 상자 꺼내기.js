function solution(n, w, num) {
    var answer = 0;
    
    // 상자 카운트 후, 위층 상자 번호 계산
    while (num <= n) {
        answer++;
        const rest = num % w || w;
        num += (w - rest) * 2 + 1;
    }
    
    return answer;
}