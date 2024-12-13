function solution(w, h) {
    const getGCD = (a, b) => {
        while (b != 0) {
            [a, b] = [b, a % b];
        }
        
        return a;
    }
    
    const gcd = getGCD(w, h);
    const [r, c] = [w / gcd, h / gcd];
    const noUsed = r + c - 1;

    return (w * h) - (noUsed * gcd);
}