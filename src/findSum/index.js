/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const cache = {};
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const compliment = target - nums[i];

    if (cache[compliment] >= 0 && i != cache[compliment]) {
      return [i, cache[target - nums[i]]];
    }

    cache[nums[i]] = i;
  }
};
