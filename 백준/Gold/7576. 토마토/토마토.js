const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [c, r] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const visited = arr.map((v) => v.slice().fill(false))
const isValid = (i, j) => i >= 0 && i < r && j >= 0 && j < c && !arr[i][j] && !visited[i][j];

const queue = [];

for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (arr[i][j] === 1) {
            queue.push([i, j]);
            visited[i][j] = true;
        }
    }
}

let head = 0;

while (queue.length > head) {
    const [x, y] = queue[head++];
    
    for (let [dx, dy] of d) {
        const [nx, ny] = [x + dx, y + dy];

        if (isValid(nx, ny)) {
            arr[nx][ny] = arr[x][y] + 1;
            visited[nx][ny] = true;
            queue.push([nx, ny]);
        }
    }
}

const isCompleted = arr.every((row) => row.every((v) => v));

if (isCompleted) {
    if (queue.length) {
        const [li, lj] = queue.at(-1);
        console.log(arr[li][lj] - 1);
    } else console.log(0);
} else console.log(-1);
