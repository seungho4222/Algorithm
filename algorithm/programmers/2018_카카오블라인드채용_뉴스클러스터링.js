/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 * 프로그래머스 lv1 - 2018 KAKAO BLIND RECRUITMENT
 * [1차] 뉴스 클러스터링
 * @param {String} str1
 * @param {String} str2
 * @returns {Number}
 */

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  // 알파벳 확인 함수
  const isAlpha = (char) => /[A-Z]/.test(char);

  // 다중집합 생성 함수
  const makeMap = (str) => {
    const map = new Map();
    for (let i = 0; i < str.length - 1; i++) {
      if (isAlpha(str[i]) && isAlpha(str[i + 1])) {
        let element = str[i] + str[i + 1];
        map.set(element, (map.get(element) ?? 0) + 1);
      }
    }

    return map;
  };

  // 자카드 유사도 계산
  const map1 = makeMap(str1);
  const map2 = makeMap(str2);

  let intersection = 0;
  let union = 0;

  const keys = new Set([...map1.keys(), ...map2.keys()]);
  keys.forEach((key) => {
    const count1 = map1.get(key) || 0;
    const count2 = map2.get(key) || 0;
    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  });

  const answer = union ? intersection / union : 1;

  /** (~~) 연산자
   * Math.floor()와 같은 기능
   * (~) 연산을 두번 한 것 -> 원래값으로 돌아오지만 소수점은 버려짐
   */
  return ~~(answer * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
