function solution(s) {
    const n = s.length;
    
    if (n % 2) return s[~~(n / 2)];
    else return s.slice(n / 2 - 1, n / 2 + 1);
}