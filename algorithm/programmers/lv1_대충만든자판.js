function solution(keymap, targets) {
  var answer = [];
  let obj = {};

  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      if (Object.keys(obj).includes(key[i])) {
        obj[key[i]] = Math.min(obj[key[i]], i + 1);
      } else {
        obj[key[i]] = i + 1;
      }
    }
  }

  for (let target of targets) {
    let cnt = 0;
    for (let char of target) {
      if (obj.hasOwnProperty(char)) {
        cnt += obj[char];
      } else {
        cnt = -1;
        break;
      }
    }
    answer.push(cnt);
  }

  return answer;
}

solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
solution(["AA"], ["B"]);
solution(["AGZ", "BSSS"], ["ASA", "BGZ"]);

// other

function solution(keymap, targets) {
  const answer = [];
  const map = {};

  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }

  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }

  return answer;
}
