/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(const i in nums){
        const pair = target-nums[i];
        if(map.has(pair)) return [i,map.get(target-nums[i])];
        map.set(nums[i],i);
    }}