function solution(begin, end) {
    const getGreatestDivisor = (num) => {
        if (num == 1) return 0;
        
        let divisor = 1;
        
        for (let i = 2; i <= num ** 0.5; i++) {
            if (num % i == 0) {
                divisor = i;
                if (num / i <= 10_000_000) return num / i;
            }
        }
        
        return divisor
    }

    return Array.from({ length: end - begin + 1 }, (_, i) => getGreatestDivisor(begin + i));
}