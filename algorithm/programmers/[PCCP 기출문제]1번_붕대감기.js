/**
 * PCCP 기출문제 1번
 * 붕대감기
 * @param {Array} bandage [시전 시간, 초당 회복량, 추가 회복량]
 * @param {Number} health
 * @param {Array} attacks attacks[i] [공격 시간, 피해량]
 * @returns
 */

function solution(bandage, health, attacks) {
  const maxHealth = health;
  const [t, x, y] = bandage;
  let currentTime = 0;

  for (let [attackTime, damage] of attacks) {
    const healingTime = attackTime - currentTime - 1;
    const fullCycles = Math.floor(healingTime / t);
    const remainingTime = healingTime % t;

    // 체력 회복
    health += fullCycles * (t * x + y) + remainingTime * x;

    // 최대 체력 제한
    if (health > maxHealth) health = maxHealth;

    // 공격에 의한 체력 감소
    health -= damage;
    if (health <= 0) return -1;

    // 현재 시간 업데이트
    currentTime = attackTime;
  }

  return health;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);
console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);
