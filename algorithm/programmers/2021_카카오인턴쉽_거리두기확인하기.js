// 좌표 유효 범위 확인 함수
function is_valid(r, c) {
  return 0 <= r && r < 5 && 0 <= c && c < 5;
}

function solution(places) {
  var answer = [];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (const place of places) {
    let is_can = true;
    let seats = [];

    // 응시자 좌표 저장
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          seats.push([i, j]);
        }
      }
    }

    // 거리두기 확인
    for (const seat of seats) {
      for (let i = 0; i < 4; i++) {
        let nx = seat[0] + dx[i];
        let ny = seat[1] + dy[i];
        if (is_valid(nx, ny)) {
          // 옆 응시자 있으면 실패
          if (place[nx][ny] === "P") {
            is_can = false;
            break;
          }
          // 옆 빈 좌석이면 한번 더 확인
          if (place[nx][ny] === "O") {
            for (let j = 0; j < 4; j++) {
              let ox = nx + dx[j];
              let oy = ny + dy[j];
              // 기준 자리 제외 후 응시자 있으면 실패
              if (is_valid(ox, oy) && (seat[0] !== ox || seat[1] !== oy)) {
                if (place[ox][oy] === "P") {
                  is_can = false;
                  break;
                }
              }
            }
          }
        }
      }
      // 실패했다면 추가 확인 X
      if (!is_can) {
        break;
      }
    }
    // 결과값 저장
    if (is_can) answer.push(1);
    else answer.push(0);
  }

  return answer;
}

// solution([
//   ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
//   ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//   ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//   ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//   ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
// ]);

solution([
  ["POOOO", "XPOOO", "OOOOO", "OOOOO", "OOOOO"],
  ["OOOOO", "OOOOO", "OOOOO", "OOOOO", "OOOOO"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);

// java

/* 
import java.util.List;
import java.util.ArrayList;

class Solution {
    public boolean is_valid(int r, int c) {
        return 0 <= r && r < 5 && 0 <= c && c < 5;
    }

    public int[] solution(String[][] places) {
        int[] answer = new int[places.length];
        int[] dx = {1, -1, 0, 0};
        int[] dy = {0, 0, 1, -1};

        for (int k = 0; k < places.length; k++) {
            boolean is_can = true;
            List<int[]> seats = new ArrayList<>();

            // 응시자 좌표 저장
            for (int i = 0; i < 5; i++) {
                for (int j = 0; j < 5; j++) {
                    if (places[k][i].charAt(j) == 'P') {
                        seats.add(new int[]{i, j});
                    }
                }
            }

            // 거리두기 확인
            for (int[] seat : seats) {
                for (int i = 0; i < 4; i++) {
                    int nx = seat[0] + dx[i];
                    int ny = seat[1] + dy[i];
                    if (is_valid(nx, ny)) {
                        // 옆 응시자 있으면 실패
                        if (places[k][nx].charAt(ny) == 'P') {
                            is_can = false;
                            break;
                        }
                        // 옆 빈 좌석이면 한번 더 확인
                        if (places[k][nx].charAt(ny) == 'O') {
                            for (int j = 0; j < 4; j++) {
                                int ox = nx + dx[j];
                                int oy = ny + dy[j];
                                // 기준 자리 제외 후 응시자 있으면 실패
                                if (is_valid(ox, oy) && (seat[0] != ox || seat[1] != oy)) {
                                    if (places[k][ox].charAt(oy) == 'P') {
                                        is_can = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!is_can) {
                    break;
                }
            }
            // 결과값 저장
            answer[k] = is_can ? 1 : 0;
        }

        return answer;
    }
}
*/
