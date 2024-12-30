function solution(a, b) {
    if (a > b) [a, b] = [b, a];
    const mid = (a + b) / 2;
    
    return (a + b) * Math.ceil(mid - a) + (Number.isInteger(mid) ? mid : 0);
}