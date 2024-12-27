function solution(n, t, m, timetable) {
    // 분 -> 시각 변환 함수
    const getTime = (num) => {
        const hour = String(~~(num / 60)).padStart(2, "0");
        const minute = String(num % 60).padStart(2, "0");
        
        return `${hour}:${minute}`;
    }
    
    // 시각 -> 분 변환 함수
    const getMinute = (str) => str.split(":").reduce((a, c) => +a * 60 + +c);
    
    const lastTime = 540 + (n - 1) * t; // 마지막 셔틀 도착 시간
    const crew = timetable.sort().map(getMinute); // 크루 도착 시간
    
    let time = 540; // 첫 셔틀 도착 시간
    let idx = 0; // 크루 인덱스
    
    for (; time <= lastTime; time += t) {
        // 현재 셔틀에 탑승 가능한 크루 수 계산
        let passengers = 0;
        while (idx < crew.length && crew[idx] <= time && passengers < m) {
            passengers++;
            idx++;
        }
        
        // 마지막 셔틀 처리
        if (time === lastTime) {
            if (passengers < m) return getTime(time);
            else return getTime(crew[idx - 1] - 1);
        }
    }
}