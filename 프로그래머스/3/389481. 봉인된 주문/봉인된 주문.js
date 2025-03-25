function solution(n, bans) {
    n = BigInt(n);
    
    // 문자열을 숫자로 변환
    const getOrder = (str) => {
        const length = str.length;
        let order = 0n;
        
        for (let i = 0; i < length; i++) {
            const num = str[i].charCodeAt(0) - 96;
            
            order += BigInt(26 ** (length - i - 1) * num);
        }
        
        return order;
    }
    
    // 숫자를 문자열로 변환
    const getSpell = (num) => {
        let str = "";
        
        while (num > 26n) {
            const quotient = ~~(num / 26n);
            const remainder = num % 26n;
            num = quotient;
            
            if (remainder) {
                str = String.fromCharCode(96 + Number(remainder)) + str;
            } else {
                str = "z" + str;
                num--;
            }
        }
        
        if (num) str = String.fromCharCode(96 + Number(num)) + str;
        
        return str;
    }
    
    // 삭제된 주문을 숫자로 변환 후 정렬
    const bansOrder = bans.map((ban) => getOrder(ban));
    bansOrder.sort((a, b) => a > b ? 1 : -1);
    
    for (let i = 0; i < bansOrder.length; i++) {
        if (n >= bansOrder[i]) n++;
        else break;
    }
    
    return getSpell(n);
}