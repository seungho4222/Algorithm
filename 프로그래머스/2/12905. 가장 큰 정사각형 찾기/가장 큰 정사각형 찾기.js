function solution(board) {
    let answer = Math.max(...board[0]); // 첫번째 행 1 찾기
    
    // 첫번째 열 1 찾기
    for (let k = 1; k < board.length; k++) {
        if (board[k][0]) {
            answer = 1;
            break;
        }
    }
    
    // 왼쪽위 대각선, 왼쪽, 위쪽에 사각형이 존재하면 현재 사각형 업데이트
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j] && board[i][j - 1] && board[i - 1][j] && board[i - 1][j - 1]) {
                board[i][j] = Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
            }
            answer = Math.max(answer, board[i][j]);
        }
    }
    
    return answer ** 2;
}