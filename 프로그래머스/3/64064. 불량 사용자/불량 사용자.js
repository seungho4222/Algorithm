function solution(user_id, banned_id) {
    const answer = new Set();
    const matches = banned_id.map(pattern => 
        user_id.filter(user => isMatch(pattern, user))
    );
    
    function isMatch(banned, user) {
        if (banned.length !== user.length) return false;
        
        return [...banned].every((char, idx) => char === "*" || char === user[idx]);
    }
    
    function comb(idx, selected) {
        if (idx === banned_id.length) {
            answer.add([...selected].sort().join(","));
            return;
        }
        
        for (let user of matches[idx]) {
            if (selected.has(user)) continue;
            
            selected.add(user);
            comb(idx + 1, selected);
            selected.delete(user);
        }
    }
    
    comb(0, new Set());

    return answer.size;
}