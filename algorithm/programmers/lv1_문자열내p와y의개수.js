function solution(s) {
  let pCnt = s.toUpperCase().split("P").length - 1;
  let yCnt = s.toUpperCase().split("Y").length - 1;

  return pCnt === yCnt ? true : false;
}

solution("pPoooyY");
solution("Pyy");

// other

function numPY(s) {
  return (s.match(/p/gi) || []).length == (s.match(/y/gi) || []).length;
}

function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
