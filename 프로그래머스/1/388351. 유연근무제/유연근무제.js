function solution(schedules, timelogs, startday) {
    let answer = 0;
    const n = schedules.length;
    // 출근 제한 시간 구하는 함수
    const getLimitedTime = (time) => {
        let hour = ~~(time / 100);
        let minute = time % 100 + 10;
        if (minute >= 60) {
            hour++;
            minute -= 60;
        }
        
        return hour * 100 + minute;
    }
    
    for (let i = 0; i < n; i++) {
        const limitedTime = getLimitedTime(schedules[i]);
        let day = startday;

        for (let j = 0; j < 7; j++) {
            const time = timelogs[i][j];
            // 지각한 직원 제외
            if (day < 6 && time > limitedTime) break;
            // 요일 계산
            day = (day % 7) + 1;
            // 상품 수령
            if (j === 6) answer++;
        }
    }
    
    return answer;
}