function solution(arr) {
    const answer = arr.splice(arr.indexOf(Math.min(...arr)),1);
    return !arr.length ? [-1] : arr;
}

console.log(soloution([4,3,2,1]);
