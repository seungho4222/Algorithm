function solution(people, limit) {
  people.sort((a, b) => b - a);
  var answer = 0;

  for (let p of people) {
    if (p + people.at(-1) <= limit) people.pop();
    answer++;
  }

  return answer;
}

solution([70, 50, 80, 50], 100);
solution([70, 80, 50], 100);

// other

function solution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }

  return people.length - i;
}
