/*
Ratiorg got statues of different sizes as a present from CodeMaster for
his birthday, each statue having an non-negative integer size. Since he
likes to make things perfect, he wants to arrange them from smallest to
largest so that each statue will be bigger than the previous one exactly
by 1. He may need some additional statues to be able to accomplish that.
Help him figure out the minimum number of additional statues needed.

For statues = [6, 2, 3, 8], the output should be solution(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7.

[input] An array of distinct non-negative integers.
        1 ≤ statues.length ≤ 10,
        0 ≤ statues[i] ≤ 20.

[output] integer: The minimal number of statues that need to be added to
        existing statues such that it contains every integer size from an
        interval [L, R] (for some L, R) and no other sizes.
*/

function solution(statues) {
  const sorted_statues = statues.sort((a, b) => a - b);
  const min_statue = sorted_statues[0];
  const max_statue = sorted_statues[sorted_statues.length - 1];

  let statue_count = 0;
  for (let i = min_statue; i < max_statue; i++) {
    if (statues.includes(i)) {
      continue;
    } else {
      statue_count += 1;
    }
  }
  return statue_count;
}

console.log(solution([6, 2, 3, 8]));
console.log(solution([0, 3]));
console.log(solution([5, 4, 6]));
console.log(solution([6, 3]));
console.log(solution([1]));

// ------------ OR ---------------

function solution2(statues) {
  const sorted_statues = statues.sort((a, b) => a - b);
  let statue_count = 0;

  for (let i = 0; i < sorted_statues.length - 1; i++) {
    statue_count += sorted_statues[i + 1] - sorted_statues[i] - 1;
  }

  return statue_count;
}
