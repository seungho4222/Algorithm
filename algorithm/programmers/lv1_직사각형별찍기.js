process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {
        console.log('*'.repeat(a));
    }
});

// 한 줄 입력받기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const n = line.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
  
  rl.close();
}).on("close", function () {
  process.exit();
});
