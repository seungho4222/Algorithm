class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }
    
    // 소요시간 짧은 것, 요청시각 빠른것, 번호 작은것 우선
    compare(a, b) {
        if (a[2] !== b[2]) return a[2] > b[2];
        if (a[1] !== b[1]) return a[1] > b[1];
        return a[0] > b[0];
    }
    
    insert(v) {
        this.heap.push(v);
        
        let idx = this.size() - 1;
        while (idx > 0) {
            const p = ~~((idx - 1) / 2);
            const pv = this.heap[p];
            
            if (this.compare(pv, v)) {
                this.heap[idx] = pv;
                idx = p;
            } else break;
        }
        
        this.heap[idx] = v;
    }
    
    remove() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const root = this.heap[0];
        const last = this.heap.pop();
        
        let idx = 0;
        const length = this.size();
        while (idx * 2 + 1 < length) {
            let smaller = idx * 2 + 1;
            const right = idx * 2 + 2;
            if (right < length && this.compare(this.heap[smaller], this.heap[right])) {
                smaller = right;
            }
            
            if (this.compare(last, this.heap[smaller])) {
                this.heap[idx] = this.heap[smaller];
                idx = smaller;
            } else break;
        }
        
        this.heap[idx] = last;
        
        return root;
    }
}

function solution(jobs) {
    // 작업에 인덱스 번호 추가 후, 요청시각순 정렬
    jobs = jobs.map((v, i) => [i, ...v]);
    jobs.sort((a, b) => a[1] - b[1]);
    const n = jobs.length; // 작업 길이
    let i = 0; // 작업 탐색 번호
    let sum = 0; // 작업 반환 시간 총합
    let t = 0; // 현재 시간
    const heap = new Heap();
    
    // 작업 요청 함수
    const request = () => {
        let prev = -1;
        for (; i < n; i++) {
            const [_, requestTime, turnaround] = jobs[i];
            // 현재 시간보다 요청시각이 이름 || 큐가 빔 || 요청시각이 같은 작업
            if (requestTime <= t || heap.isEmpty() || prev === requestTime) {
                prev = requestTime;
                heap.insert(jobs[i]);
            } else break;
        }
    }
    
    // 첫 작업 호출
    request();
    
    while (heap.size()) {
        const [_, requestTime, turnaround] = heap.remove();
        
        if (t < requestTime) t = requestTime;
        t += turnaround; // 작업 종료로 인한 현재 시간 업데이트
        sum += t - requestTime; // 반환 시간 추가
        
        request(); // 현재 시간 변화로 인한 작업 추가 요청
    }
    
    return ~~(sum / n);
}