function solution(players, m, k) {
    var answer = 0;
    
    for (let i = 0; i < 24; i++) {
        const player = players[i];
        
        if (player >= m) {
            const quotient = ~~(player / m);
            answer += quotient;
            
            for (let j = i; j < i + k && j < 24; j++) {
                players[j] -= quotient * m;
            }
        }
    }
    
    return answer;
}