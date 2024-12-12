function solution(n) {
    if (n === 1) return [1];
    
    const lastNum = (1 + n) * ~~(n / 2) + (n % 2 ? ~~(n / 2) + 1 : 0);
    const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    const d = [[1, 0], [0, 1], [-1, -1]];
    let idx = 0;
    let [i, j] = [0, 0];
    let num = 1;
    arr[i][j] = num++;
    
    while (true) {
        const [ni, nj] = [i + d[idx][0], j + d[idx][1]];
            
        if (ni == n || ni < nj || arr[ni][nj]) {
            idx++;
            idx %= 3;
            continue;
        }
            
        [i, j] = [ni, nj];
        arr[i][j] = num++;
        
        if (num > lastNum) break;
    }
    
    return arr.flat();
}