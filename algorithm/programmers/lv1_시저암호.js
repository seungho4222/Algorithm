function solution(s, n) {
    var answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += " ";
            continue;
        }
        
        const isUpperCase = s[i] === s[i].toUpperCase();
        let code = s[i].charCodeAt() + n;
        
        if ((isUpperCase && code > 90) || code > 122) {
            code -= 26;
        }
        
        answer += String.fromCharCode(code);
    }
    
    return answer;
}
