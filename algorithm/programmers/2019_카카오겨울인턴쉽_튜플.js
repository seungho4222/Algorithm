function solution(s) {
  var answer = [];

  let set = s.split("},{");
  let arr = Array.from({ length: set.length }, () => []);

  // 괄호 제거 -> 숫자 구분 -> 길이에 맞는 배열에 추가
  for (const item of set) {
    let temp = "";
    for (let i = 0; i < item.length; i++) {
      if (!isNaN(item[i]) || item[i] === ",") {
        temp += item[i];
      }
    }
    let tempArr = temp.split(",").map((item) => Number(item));
    arr[tempArr.length - 1] = tempArr;
  }

  for (const item of arr) {
    for (const num of item) {
      if (!answer.includes(num)) answer.push(num);
    }
  }

  return answer;
}

// solution("{{4,2,3},{3},{2,3,4,1},{2,3}}");
solution("{{123}}");

// 고수의 답

function solution(s) {
  let answer = [];

  // 문자 대체 -> 파싱 -> 정렬
  let newArr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  newArr.sort((a, b) => {
    return a.length - b.length;
  });

  let temp = [];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }

  answer = [...new Set(temp)];
  return answer;
}

solution("{{4,2,3},{3},{2,3,4,1},{2,3}}");
