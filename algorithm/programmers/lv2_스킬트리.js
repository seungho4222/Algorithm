/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/49993
 * 프로그래머스 lv2 - Summer/Winter Coding(~2018)
 * 스킬트리
 * @param {String} skill
 * @param {String[]} skill_trees
 * @returns {Number}
 */

function solution(skill, skill_trees) {
  var answer = 0;

  for (let tree of skill_trees) {
    let order = -1;
    let isNext = true;
    let check = true;

    for (let i = 0; i < skill.length; i++) {
      const idx = tree.search(skill[i]);

      if (isNext && idx === -1) {
        isNext = false;
      } else if (isNext && idx > order) {
        order = idx;
      } else if ((isNext && idx < order) || (!isNext && idx > -1)) {
        check = false;
        break;
      }
    }

    if (check) answer++;
  }

  return answer;
}

// other

function solution(skill, skill_trees) {
  const restRemoveRegex = new RegExp(`[^${skill}]`, "g");

  return skill_trees.filter((v) => {
    const tempSkill = v.replace(restRemoveRegex, "");
    return skill.startsWith(tempSkill);
    // return skill.indexOf(tempSkill) === 0 || tempSkill === "";
  }).length;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
