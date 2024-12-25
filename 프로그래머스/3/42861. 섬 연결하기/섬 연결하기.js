function solution(n, costs) {
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;
    
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }
    
    const union = (x, y) => {
        x = find(x);
        y = find(y);
        
        if (x === y) return false;
        
        x < y ? parent[y] = x : parent[x] = y;
        return true;
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    let cnt = 0;
    let total = 0;
    
    for (let [s, e, w] of costs) {
        if (union(s, e)) {
            cnt++;
            total += w;
            if (cnt === n - 1) break;
        }
    }
    
    return total;
}