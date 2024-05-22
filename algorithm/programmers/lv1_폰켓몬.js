function solution(nums) {
  // 중복 제거
  let save = [...new Set(nums)];
  // 폰켓몬 종 수, 절반 중 최소값 비교
  let answer = Math.min(save.length, nums.length / 2);

  return answer;
}
