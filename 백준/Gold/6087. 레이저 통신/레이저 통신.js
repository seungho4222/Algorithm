const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt").toString().trim().split("\n");

const [w, h] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: h }, () => Array(w).fill(0));
const d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let gx, gy, idx = 0;
const q = [];

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if (input[i][j] === "C") {
            if (q.length) [gx, gy] = [i, j];
            else q.push([i, j]);
        }
    }
}
visited[q[0][0]][q[0][1]] = 1;

top: while (true) {
    let [x, y] = q[idx++];

    for (let [dx, dy] of d) {
        let [nx, ny] = [x + dx, y + dy];
        while (true) {
            if (nx < 0 || nx >= h || ny < 0 || ny >= w || input[nx][ny] == "*") break;
            if (!visited[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = visited[x][y] + 1;
                if (nx === gx && ny === gy) break top;
            }
            nx += dx;
            ny += dy;
        }
    }
}

console.log(visited[gx][gy] - 2);
